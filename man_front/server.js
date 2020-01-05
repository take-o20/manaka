require('dotenv').config();

const express = require('express')
const http = require('http')
const socketIO = require('socket.io')

const port = process.env.REACT_APP_SOCKET_PORT

const app = express()

const server = http.createServer(app)

// This creates our socket using the instance of the server
const io = socketIO(server)

// This is what the socket.io syntax is like, we will work this later
io.on('connection', socket => {
  // room への入出
  socket.on('client_to_room_join', (data) => {
    const room = data.room
    console.log(data.name," join room:number-", room)
    socket.join(room)
  })

  // イベントデータの受信
  socket.on('client_to_server_message', (data) => {
    const room = data.room
    console.log("posted message",data)

    // イベントデータの送信
    io.to(room).emit('server_to_client_message',data)
  })
  // disconnect is fired when a client leaves the server
  socket.on('disconnect', () => {
    // console.log('user disconnected')
  })
})

server.listen(port, () => console.log(`Listening on port ${port}`))
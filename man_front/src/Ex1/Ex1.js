import React from 'react'

const Ex1 = () => {
  let count = 0

  const countPlus = () => {
    count++
    console.log(count)
  }
  return (
    <button onClick={()=>countPlus()} >
      click{count}
    </ button>
  )
}

export default Ex1
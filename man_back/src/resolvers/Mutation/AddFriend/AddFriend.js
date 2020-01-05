import moment from 'moment'

const addfriend = async (parent, args, context, info) => {
  const time = moment().unix()
  const friendId = args.friendId
  const defaultName = args.defaultName
  const authorId = args.authorId
  const roomId = authorId  + time + friendId
  const authorData = await context.prisma.user({id: authorId})
  const authorName = authorData.name
  const isExist  = await context.prisma.friends({
    where:{
    AND: [{
      friendId: friendId
    }, {
      author:{
        id: authorId
      }
    }]}
  })
  if(isExist.length >= 1){
    throw new Error('the friend is Exist!')
  }
  // database of myself
  const friend =  await context.prisma.createFriend({
    defaultName,
    friendId,
    author:{connect:{id:authorId}},
    chatRoomId: roomId,
    permission: true,
  })
  // database of friend chatRoomId is same!!!!
  const friendData = await context.prisma.createFriend({
    defaultName: authorName,
    friendId: authorId,
    author:{connect:{id:friendId}},
    chatRoomId: roomId,
  })
  
  return {
    id:friend.id,
    defaultName:friend.defaultName,
    friendId: friend.friendId,
  }
}

export default addfriend
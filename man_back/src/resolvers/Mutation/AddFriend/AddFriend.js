import moment from 'moment'

const addfriend = async (parent, args, context, info) => {
  const time = moment().unix()
  const {input} = args
  const {friendId, firstName, lastName, authorId} = input
  const roomId = authorId  + time + friendId
  const authorData = await context.prisma.user({id: authorId})
  const authorFirst = authorData.firstName
  const authorLast = authorData.lastName
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
    firstName,
    lastName,
    friendId,
    author:{connect:{id:authorId}},
    chatRoomId: roomId,
    permission: true,
  })
  // database of friend chatRoomId is same!!!!
  const friendData = await context.prisma.createFriend({
    firstName: authorFirst,
    lastName: authorLast,
    friendId: authorId,
    author:{connect:{id:friendId}},
    chatRoomId: roomId,
  })
  return {friend}
}

export default addfriend

const friendupdate = async (parent, args, context, info) => {
  const {id, permission} = args
  const friend = await context.prisma.updateFriend({
    data:{
      permission
    },
    where:{
      id:id
    }
  })
  return friend
}

export default friendupdate
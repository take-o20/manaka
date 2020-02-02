
const friendupdate = async (parent, args, context, info) => {
  const { input } = args
  const {id, permission} = input
  const friend = await context.prisma.updateFriend({
    data:{
      permission
    },
    where:{
      id:id
    }
  })
  return {friend}
}

export default friendupdate
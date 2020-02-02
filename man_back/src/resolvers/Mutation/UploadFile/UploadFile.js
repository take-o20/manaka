
const uploadfile = async (parent, args, context, info) => {
  const {input} = args
  const {encoding, authorId} = input
  const file =  await context.prisma.createFile({
    encoding: encoding,
    author:{
      connect:{
        id: authorId
      }
    }
  })
  return {file}
}

export default uploadfile
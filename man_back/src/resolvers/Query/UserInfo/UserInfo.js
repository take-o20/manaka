
const users = async(parent, args, {prisma}, info) => prisma.users()

const user = async(parent, args, {prisma}, info) => prisma.user({...args})

const friends = async(parent, args, {prisma}, info) => prisma.friends()

const friend = async(parent, args, {prisma}, info) => prisma.friend({...args})

const friendslist = async(parent, args, {prisma}, info) => {
  const {input} = args
  const {authorId} = input
  const list = await prisma.friends({
    where:{
      author:{
        id: authorId
      }
    }
  })
  return list
}

const profileFile = async(parent, args, {prisma}, info) => {
  const { input } = args
  const {authorId} = input
  const result =  await prisma.file({
    id: authorId
  })
  return result
}


export {users, user, friends, friend, friendslist, profileFile}
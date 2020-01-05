
const users = async(parent, args, {prisma}, info) => prisma.users()

const user = async(parent, args, {prisma}, info) => prisma.user({...args})

const friends = async(parent, args, {prisma}, info) => prisma.friends()

const friend = async(parent, args, {prisma}, info) => prisma.friend({...args})

const friendslist = async(parent, args, {prisma}, info) => {
  const authorId = args.authorId
  const list = await prisma.friends({
    where:{
      author:{
        id: authorId
      }
    }
  })
  return list
}

export {users, user, friends, friend, friendslist}
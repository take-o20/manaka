
const users = async(parent, args, {prisma}, info) => prisma.users()

const user = async(parent, args, {prisma}, info) => prisma.user({...args})

const friends = async(parent, args, {prisma}, info) => prisma.friends()

const friend = async(parent, args, {prisma}, info) => prisma.friend({...args})

export {users, user, friends, friend}
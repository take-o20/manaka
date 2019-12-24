import a from "./a"

const Query = {
  users: (parent, args, { prisma }, info) => prisma.users(),
  fuck:(parent, args, { prisma }, info) => a(args),
  hello:(parent, args, { prisma }, info) => a(args),
}

export default Query

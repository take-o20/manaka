const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../../../utils')

const signup = async (parent, args, context, info) => {
  // 1
  const password = await bcrypt.hash(args.password, 10)
  // 2
  const user = await context.prisma.createUser({ ...args, password })
  // 3
  const token = jwt.sign({ userId: user.id, userName: user.name }, APP_SECRET)

  // 4
  return {
    token,
    user,
  }
}

export default signup
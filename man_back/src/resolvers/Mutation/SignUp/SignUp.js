const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../../../utils')

const signup = async (parent, args, context, info) => {
  const {input} = args
  const {password, email, firstName, lastName, phoneNumber} = input
  // 1
  const pass = await bcrypt.hash(password, 10)
  // 2
  const user = await context.prisma.createUser({...input, password:pass })
  // 3
  const token = jwt.sign({ userId: user.id, userName: user.name }, APP_SECRET)

  // 4
  return {
    token,
    user,
  }
}

export default signup
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../../../utils')

const login = async (parent, args, context, info) => {
  const {input} = args
  const {email, password} = input
  const user = await context.prisma.user({email:email })
  if (!user) {
    throw new Error('No such user found')
  }
  const valid = await bcrypt.compare(password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  const token = jwt.sign({ userId: user.id, userName: user.name }, APP_SECRET)

  return {
    token,
    user
  }
}

export default login
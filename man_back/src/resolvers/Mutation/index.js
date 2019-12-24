import signup from './Signup/SignUp'
import login from './Login/Login'
// const Mutation = {
//   createUser: (parent, args, { prisma }, info) => prisma.createUser(),
//   deleteUser: (parent, args, {prisma }, info) => prisma.deleteUser(),
// }

// export default Mutation

module.exports = {
  signup,
  login,
}
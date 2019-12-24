import { config } from "dotenv";
config();
import { GraphQLServer } from 'graphql-yoga'
import { Prisma } from 'prisma-binding'
import express from "express"
import graphqlHTTP from "express-graphql"
import { prisma } from './generated/prisma-client';
import resolvers from './resolvers'

const options = {
  port: 4000,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground',
}
const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma,
    }
  },
})

server.start(options,() => console.log('Server is running on http://localhost:4000/playground'))

// const app = express()
// app.use('/graphql', graphqlHTTP({
//   schema: 'src/schema.graphql',
//   rootValue: resolvers,
//   graphiql: true,
// }))
// app.listen(4000)
// console.log('Running a GraphQL API server at http://localhost:4000/graphql')
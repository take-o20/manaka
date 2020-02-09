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
  // endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground',
  bodyParserOptions: { limit: "1000mb", type: "application/json", extended: true},
}
// const server = new GraphQLServer({
//   typeDefs: 'src/schema.graphql',
//   resolvers,
//   context: request => {
//     return {
//       ...request,
//       prisma,
//     }
//   },
// })

// server.start(options,() => console.log('Server is running on http://localhost:4000/playground'))

// const app = express()
// app.use('/graphql', graphqlHTTP({
//   schema: 'src/schema.graphql',
//   rootValue: resolvers,
//   graphiql: true,
// }))
// app.listen(4000)
// console.log('Running a GraphQL API server at http://localhost:4000/graphql')

const { ApolloServer, gql } = require('apollo-server');
import { importSchema } from 'graphql-import'
import { makeExecutableSchema } from 'graphql-tools'

const basicDefs = importSchema(__dirname + "/schema.graphql")

const mutationDefs = gql`
  # I have other mutation fields defined in basicDefs
  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }
  extend type User{
    profileFile:File
  }
  extend type Query {
    _ : Boolean
  }
  
  extend type Mutation {
    singleUpload(file: Upload!): File!,
    singleUploadStream(file: Upload!): File!
  }

  # extend type Mutation {
  #   singleUploadStream(file: Upload!): File
  # }
`
const server = new ApolloServer({
  options,
  typeDefs: [basicDefs, mutationDefs],
  resolvers,
  context: request => {
    return {
      ...request,
      prisma
    }
  }
 });

server.listen().then(({ url }) => {
  console.log(`\`🚀  Server ready at ${url}`);
});
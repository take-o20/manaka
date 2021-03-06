"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Friend",
    embedded: false
  },
  {
    name: "File",
    embedded: false
  },
  {
    name: "Faculty",
    embedded: false
  },
  {
    name: "Major",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466/`,
  secret: `graphql-prisma-manaka1224`
});
exports.prisma = new exports.Prisma();

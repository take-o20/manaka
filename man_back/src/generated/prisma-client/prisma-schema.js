module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateFile {
  count: Int!
}

type AggregateFriend {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type File {
  filename: String!
  mimetype: String!
  encoding: String!
}

type FileConnection {
  pageInfo: PageInfo!
  edges: [FileEdge]!
  aggregate: AggregateFile!
}

input FileCreateInput {
  filename: String!
  mimetype: String!
  encoding: String!
}

type FileEdge {
  node: File!
  cursor: String!
}

enum FileOrderByInput {
  filename_ASC
  filename_DESC
  mimetype_ASC
  mimetype_DESC
  encoding_ASC
  encoding_DESC
}

type FilePreviousValues {
  filename: String!
  mimetype: String!
  encoding: String!
}

type FileSubscriptionPayload {
  mutation: MutationType!
  node: File
  updatedFields: [String!]
  previousValues: FilePreviousValues
}

input FileSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FileWhereInput
  AND: [FileSubscriptionWhereInput!]
  OR: [FileSubscriptionWhereInput!]
  NOT: [FileSubscriptionWhereInput!]
}

input FileUpdateManyMutationInput {
  filename: String
  mimetype: String
  encoding: String
}

input FileWhereInput {
  filename: String
  filename_not: String
  filename_in: [String!]
  filename_not_in: [String!]
  filename_lt: String
  filename_lte: String
  filename_gt: String
  filename_gte: String
  filename_contains: String
  filename_not_contains: String
  filename_starts_with: String
  filename_not_starts_with: String
  filename_ends_with: String
  filename_not_ends_with: String
  mimetype: String
  mimetype_not: String
  mimetype_in: [String!]
  mimetype_not_in: [String!]
  mimetype_lt: String
  mimetype_lte: String
  mimetype_gt: String
  mimetype_gte: String
  mimetype_contains: String
  mimetype_not_contains: String
  mimetype_starts_with: String
  mimetype_not_starts_with: String
  mimetype_ends_with: String
  mimetype_not_ends_with: String
  encoding: String
  encoding_not: String
  encoding_in: [String!]
  encoding_not_in: [String!]
  encoding_lt: String
  encoding_lte: String
  encoding_gt: String
  encoding_gte: String
  encoding_contains: String
  encoding_not_contains: String
  encoding_starts_with: String
  encoding_not_starts_with: String
  encoding_ends_with: String
  encoding_not_ends_with: String
  AND: [FileWhereInput!]
  OR: [FileWhereInput!]
  NOT: [FileWhereInput!]
}

type Friend {
  id: ID!
  nickname: String
  firstName: String!
  lastName: String!
  friendId: String!
  author: User!
  chatRoomId: String!
  permission: Boolean!
}

type FriendConnection {
  pageInfo: PageInfo!
  edges: [FriendEdge]!
  aggregate: AggregateFriend!
}

input FriendCreateInput {
  nickname: String
  firstName: String!
  lastName: String!
  friendId: String!
  author: UserCreateOneWithoutFriendsInput!
  chatRoomId: String!
  permission: Boolean
}

input FriendCreateManyWithoutAuthorInput {
  create: [FriendCreateWithoutAuthorInput!]
  connect: [FriendWhereUniqueInput!]
}

input FriendCreateWithoutAuthorInput {
  nickname: String
  firstName: String!
  lastName: String!
  friendId: String!
  chatRoomId: String!
  permission: Boolean
}

type FriendEdge {
  node: Friend!
  cursor: String!
}

enum FriendOrderByInput {
  id_ASC
  id_DESC
  nickname_ASC
  nickname_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  friendId_ASC
  friendId_DESC
  chatRoomId_ASC
  chatRoomId_DESC
  permission_ASC
  permission_DESC
}

type FriendPreviousValues {
  id: ID!
  nickname: String
  firstName: String!
  lastName: String!
  friendId: String!
  chatRoomId: String!
  permission: Boolean!
}

input FriendScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  nickname: String
  nickname_not: String
  nickname_in: [String!]
  nickname_not_in: [String!]
  nickname_lt: String
  nickname_lte: String
  nickname_gt: String
  nickname_gte: String
  nickname_contains: String
  nickname_not_contains: String
  nickname_starts_with: String
  nickname_not_starts_with: String
  nickname_ends_with: String
  nickname_not_ends_with: String
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  friendId: String
  friendId_not: String
  friendId_in: [String!]
  friendId_not_in: [String!]
  friendId_lt: String
  friendId_lte: String
  friendId_gt: String
  friendId_gte: String
  friendId_contains: String
  friendId_not_contains: String
  friendId_starts_with: String
  friendId_not_starts_with: String
  friendId_ends_with: String
  friendId_not_ends_with: String
  chatRoomId: String
  chatRoomId_not: String
  chatRoomId_in: [String!]
  chatRoomId_not_in: [String!]
  chatRoomId_lt: String
  chatRoomId_lte: String
  chatRoomId_gt: String
  chatRoomId_gte: String
  chatRoomId_contains: String
  chatRoomId_not_contains: String
  chatRoomId_starts_with: String
  chatRoomId_not_starts_with: String
  chatRoomId_ends_with: String
  chatRoomId_not_ends_with: String
  permission: Boolean
  permission_not: Boolean
  AND: [FriendScalarWhereInput!]
  OR: [FriendScalarWhereInput!]
  NOT: [FriendScalarWhereInput!]
}

type FriendSubscriptionPayload {
  mutation: MutationType!
  node: Friend
  updatedFields: [String!]
  previousValues: FriendPreviousValues
}

input FriendSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FriendWhereInput
  AND: [FriendSubscriptionWhereInput!]
  OR: [FriendSubscriptionWhereInput!]
  NOT: [FriendSubscriptionWhereInput!]
}

input FriendUpdateInput {
  nickname: String
  firstName: String
  lastName: String
  friendId: String
  author: UserUpdateOneRequiredWithoutFriendsInput
  chatRoomId: String
  permission: Boolean
}

input FriendUpdateManyDataInput {
  nickname: String
  firstName: String
  lastName: String
  friendId: String
  chatRoomId: String
  permission: Boolean
}

input FriendUpdateManyMutationInput {
  nickname: String
  firstName: String
  lastName: String
  friendId: String
  chatRoomId: String
  permission: Boolean
}

input FriendUpdateManyWithoutAuthorInput {
  create: [FriendCreateWithoutAuthorInput!]
  delete: [FriendWhereUniqueInput!]
  connect: [FriendWhereUniqueInput!]
  set: [FriendWhereUniqueInput!]
  disconnect: [FriendWhereUniqueInput!]
  update: [FriendUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [FriendUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [FriendScalarWhereInput!]
  updateMany: [FriendUpdateManyWithWhereNestedInput!]
}

input FriendUpdateManyWithWhereNestedInput {
  where: FriendScalarWhereInput!
  data: FriendUpdateManyDataInput!
}

input FriendUpdateWithoutAuthorDataInput {
  nickname: String
  firstName: String
  lastName: String
  friendId: String
  chatRoomId: String
  permission: Boolean
}

input FriendUpdateWithWhereUniqueWithoutAuthorInput {
  where: FriendWhereUniqueInput!
  data: FriendUpdateWithoutAuthorDataInput!
}

input FriendUpsertWithWhereUniqueWithoutAuthorInput {
  where: FriendWhereUniqueInput!
  update: FriendUpdateWithoutAuthorDataInput!
  create: FriendCreateWithoutAuthorInput!
}

input FriendWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  nickname: String
  nickname_not: String
  nickname_in: [String!]
  nickname_not_in: [String!]
  nickname_lt: String
  nickname_lte: String
  nickname_gt: String
  nickname_gte: String
  nickname_contains: String
  nickname_not_contains: String
  nickname_starts_with: String
  nickname_not_starts_with: String
  nickname_ends_with: String
  nickname_not_ends_with: String
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  friendId: String
  friendId_not: String
  friendId_in: [String!]
  friendId_not_in: [String!]
  friendId_lt: String
  friendId_lte: String
  friendId_gt: String
  friendId_gte: String
  friendId_contains: String
  friendId_not_contains: String
  friendId_starts_with: String
  friendId_not_starts_with: String
  friendId_ends_with: String
  friendId_not_ends_with: String
  author: UserWhereInput
  chatRoomId: String
  chatRoomId_not: String
  chatRoomId_in: [String!]
  chatRoomId_not_in: [String!]
  chatRoomId_lt: String
  chatRoomId_lte: String
  chatRoomId_gt: String
  chatRoomId_gte: String
  chatRoomId_contains: String
  chatRoomId_not_contains: String
  chatRoomId_starts_with: String
  chatRoomId_not_starts_with: String
  chatRoomId_ends_with: String
  chatRoomId_not_ends_with: String
  permission: Boolean
  permission_not: Boolean
  AND: [FriendWhereInput!]
  OR: [FriendWhereInput!]
  NOT: [FriendWhereInput!]
}

input FriendWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createFile(data: FileCreateInput!): File!
  updateManyFiles(data: FileUpdateManyMutationInput!, where: FileWhereInput): BatchPayload!
  deleteManyFiles(where: FileWhereInput): BatchPayload!
  createFriend(data: FriendCreateInput!): Friend!
  updateFriend(data: FriendUpdateInput!, where: FriendWhereUniqueInput!): Friend
  updateManyFriends(data: FriendUpdateManyMutationInput!, where: FriendWhereInput): BatchPayload!
  upsertFriend(where: FriendWhereUniqueInput!, create: FriendCreateInput!, update: FriendUpdateInput!): Friend!
  deleteFriend(where: FriendWhereUniqueInput!): Friend
  deleteManyFriends(where: FriendWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File]!
  filesConnection(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FileConnection!
  friend(where: FriendWhereUniqueInput!): Friend
  friends(where: FriendWhereInput, orderBy: FriendOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Friend]!
  friendsConnection(where: FriendWhereInput, orderBy: FriendOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FriendConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  file(where: FileSubscriptionWhereInput): FileSubscriptionPayload
  friend(where: FriendSubscriptionWhereInput): FriendSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  nickname: String
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  birthday: DateTime
  phoneNumber: String
  friends(where: FriendWhereInput, orderBy: FriendOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Friend!]
  biography: String
  profileFile: String
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  nickname: String
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  birthday: DateTime
  phoneNumber: String
  friends: FriendCreateManyWithoutAuthorInput
  biography: String
  profileFile: String
}

input UserCreateOneWithoutFriendsInput {
  create: UserCreateWithoutFriendsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutFriendsInput {
  nickname: String
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  birthday: DateTime
  phoneNumber: String
  biography: String
  profileFile: String
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  nickname_ASC
  nickname_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  birthday_ASC
  birthday_DESC
  phoneNumber_ASC
  phoneNumber_DESC
  biography_ASC
  biography_DESC
  profileFile_ASC
  profileFile_DESC
}

type UserPreviousValues {
  id: ID!
  nickname: String
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  birthday: DateTime
  phoneNumber: String
  biography: String
  profileFile: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  nickname: String
  firstName: String
  lastName: String
  email: String
  password: String
  birthday: DateTime
  phoneNumber: String
  friends: FriendUpdateManyWithoutAuthorInput
  biography: String
  profileFile: String
}

input UserUpdateManyMutationInput {
  nickname: String
  firstName: String
  lastName: String
  email: String
  password: String
  birthday: DateTime
  phoneNumber: String
  biography: String
  profileFile: String
}

input UserUpdateOneRequiredWithoutFriendsInput {
  create: UserCreateWithoutFriendsInput
  update: UserUpdateWithoutFriendsDataInput
  upsert: UserUpsertWithoutFriendsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutFriendsDataInput {
  nickname: String
  firstName: String
  lastName: String
  email: String
  password: String
  birthday: DateTime
  phoneNumber: String
  biography: String
  profileFile: String
}

input UserUpsertWithoutFriendsInput {
  update: UserUpdateWithoutFriendsDataInput!
  create: UserCreateWithoutFriendsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  nickname: String
  nickname_not: String
  nickname_in: [String!]
  nickname_not_in: [String!]
  nickname_lt: String
  nickname_lte: String
  nickname_gt: String
  nickname_gte: String
  nickname_contains: String
  nickname_not_contains: String
  nickname_starts_with: String
  nickname_not_starts_with: String
  nickname_ends_with: String
  nickname_not_ends_with: String
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  birthday: DateTime
  birthday_not: DateTime
  birthday_in: [DateTime!]
  birthday_not_in: [DateTime!]
  birthday_lt: DateTime
  birthday_lte: DateTime
  birthday_gt: DateTime
  birthday_gte: DateTime
  phoneNumber: String
  phoneNumber_not: String
  phoneNumber_in: [String!]
  phoneNumber_not_in: [String!]
  phoneNumber_lt: String
  phoneNumber_lte: String
  phoneNumber_gt: String
  phoneNumber_gte: String
  phoneNumber_contains: String
  phoneNumber_not_contains: String
  phoneNumber_starts_with: String
  phoneNumber_not_starts_with: String
  phoneNumber_ends_with: String
  phoneNumber_not_ends_with: String
  friends_every: FriendWhereInput
  friends_some: FriendWhereInput
  friends_none: FriendWhereInput
  biography: String
  biography_not: String
  biography_in: [String!]
  biography_not_in: [String!]
  biography_lt: String
  biography_lte: String
  biography_gt: String
  biography_gte: String
  biography_contains: String
  biography_not_contains: String
  biography_starts_with: String
  biography_not_starts_with: String
  biography_ends_with: String
  biography_not_ends_with: String
  profileFile: String
  profileFile_not: String
  profileFile_in: [String!]
  profileFile_not_in: [String!]
  profileFile_lt: String
  profileFile_lte: String
  profileFile_gt: String
  profileFile_gte: String
  profileFile_contains: String
  profileFile_not_contains: String
  profileFile_starts_with: String
  profileFile_not_starts_with: String
  profileFile_ends_with: String
  profileFile_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    
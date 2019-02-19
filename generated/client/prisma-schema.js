module.exports = {
        typeDefs: /* GraphQL */ `type AggregateTesting {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createTesting(data: TestingCreateInput!): Testing!
  updateTesting(data: TestingUpdateInput!, where: TestingWhereUniqueInput!): Testing
  updateManyTestings(data: TestingUpdateManyMutationInput!, where: TestingWhereInput): BatchPayload!
  upsertTesting(where: TestingWhereUniqueInput!, create: TestingCreateInput!, update: TestingUpdateInput!): Testing!
  deleteTesting(where: TestingWhereUniqueInput!): Testing
  deleteManyTestings(where: TestingWhereInput): BatchPayload!
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
  testing(where: TestingWhereUniqueInput!): Testing
  testings(where: TestingWhereInput, orderBy: TestingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Testing]!
  testingsConnection(where: TestingWhereInput, orderBy: TestingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TestingConnection!
  node(id: ID!): Node
}

type Subscription {
  testing(where: TestingSubscriptionWhereInput): TestingSubscriptionPayload
}

type Testing {
  id: ID!
  name: String
  test: String
}

type TestingConnection {
  pageInfo: PageInfo!
  edges: [TestingEdge]!
  aggregate: AggregateTesting!
}

input TestingCreateInput {
  name: String
  test: String
}

type TestingEdge {
  node: Testing!
  cursor: String!
}

enum TestingOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  test_ASC
  test_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TestingPreviousValues {
  id: ID!
  name: String
  test: String
}

type TestingSubscriptionPayload {
  mutation: MutationType!
  node: Testing
  updatedFields: [String!]
  previousValues: TestingPreviousValues
}

input TestingSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TestingWhereInput
  AND: [TestingSubscriptionWhereInput!]
  OR: [TestingSubscriptionWhereInput!]
  NOT: [TestingSubscriptionWhereInput!]
}

input TestingUpdateInput {
  name: String
  test: String
}

input TestingUpdateManyMutationInput {
  name: String
  test: String
}

input TestingWhereInput {
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
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  test: String
  test_not: String
  test_in: [String!]
  test_not_in: [String!]
  test_lt: String
  test_lte: String
  test_gt: String
  test_gte: String
  test_contains: String
  test_not_contains: String
  test_starts_with: String
  test_not_starts_with: String
  test_ends_with: String
  test_not_ends_with: String
  AND: [TestingWhereInput!]
  OR: [TestingWhereInput!]
  NOT: [TestingWhereInput!]
}

input TestingWhereUniqueInput {
  id: ID
}
`
      }
    
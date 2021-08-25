import { ApolloServer, gql } from 'apollo-server-lambda'

const typeDefs = gql`
  type User {
    firstName: String
    lastName: String
  }

  type Query {
    users: [User]
  }
`;

const users = [
  {
    firstName: 'John',
    lastName: 'Doe'
  },
  {
    firstName: 'Nicole',
    lastName: 'Kidman'
  },
];

const resolvers = {
  Query: {
    users: () => users
  }
};

const apolloServer = new ApolloServer({ resolvers, typeDefs });

const graphqlHandler = apolloServer.createHandler();
export { graphqlHandler }
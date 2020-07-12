const apolloServer = require('apollo-server');

const typeDefs = apolloServer.gql`
    type Book {
        title: String
        author: String
    }
    
    type Query {
        books: [Book]
    }
`;

const resolvers = {
    Query: {
        books: () => {
            return [{ __typename: 'Book', title: 'Hey', author: 'lalaley' }]
        },
    },
};

module.exports = apolloServer.makeExecutableSchema({ typeDefs, resolvers })

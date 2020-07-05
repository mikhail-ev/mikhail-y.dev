const apolloServer = require('apollo-server');

const typeDefs = apolloServer.gql`    
    type Query {
        serverTime: String
    }
`;

const resolvers = {
    Query: {
        serverTime: () => {
            console.log('Getting time!')
            return new Date().toISOString()
        },
    },
};

module.exports = apolloServer.makeExecutableSchema({ typeDefs, resolvers })

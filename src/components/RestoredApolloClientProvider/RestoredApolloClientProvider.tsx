import React, {useContext} from 'react'
import {ApolloClient, ApolloProvider, getApolloContext, InMemoryCache} from "@apollo/client";
import { createHttpLink } from "apollo-link-http";

let client

export function RestoredApolloClientProvider({apolloState, children}) {
    const context = useContext(getApolloContext())
    if (context && context.client) {
        return children
    }
    if (!client) {
        client =  new ApolloClient({
            cache: new InMemoryCache().restore(apolloState),
            // @ts-ignore
            link: createHttpLink({uri: '/graphql'})
        })
    }
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}

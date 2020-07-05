import React from 'react'
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

let client

export function RestoredApolloClientProvider({apolloState, children}) {
    if (!client) {
        client =  new ApolloClient({
            cache: new InMemoryCache().restore(apolloState)
        })
    }
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}

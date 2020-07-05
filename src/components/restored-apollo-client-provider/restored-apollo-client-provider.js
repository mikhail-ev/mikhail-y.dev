import React, {useContext} from 'react'
import {ApolloClient, ApolloProvider, getApolloContext, InMemoryCache} from "@apollo/client";

let client

export function RestoredApolloClientProvider({apolloState, children}) {
    const context = useContext(getApolloContext())
    if (context && context.client) {
        return children
    }
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

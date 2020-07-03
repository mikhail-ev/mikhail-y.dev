import React from 'react'
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import {APOLLO_STATE_KEY} from "../../helpers/head";
import { createHttpLink } from "apollo-link-http";

export function createApolloClient(link) {
    let client
    try {
        client = new ApolloClient({
            cache: new InMemoryCache().restore(window[APOLLO_STATE_KEY]),
            ssrMode: false,
            link,
        })
        console.log('not ssr with link')
    } catch (e) {
        client =  new ApolloClient({
            cache: new InMemoryCache(),
            ssrMode: true,
            link,
        })
        console.log('ssr with link')
    }
    return client
}

export default function RehydratedApolloClientProvider({ children }) {
    // createHttpLink({ uri: "/graphql" })
    return (
        <ApolloProvider client={createApolloClient()}>
            <div>client connected</div>
            {children}
        </ApolloProvider>
    )
}

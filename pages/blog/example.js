import React, {useContext} from 'react'
import Head from "next/head";
import {generateApolloStateScript} from "../../helpers/head";
import Example from "../../components/example/example";
import {createApolloClient} from "../../components/rehydrated-apollo-client-provider/rehydrated-apollo-client-provider";
import {ApolloProvider, useQuery, getApolloContext} from "@apollo/client";
import GetBooks from "../../components/example/get-books.graphql";

export default function MyPage({apolloStringifiedState, message}) {
    console.log('Page message: ', message)
    // const {client} = useContext(getApolloContext())
    const {data, loading} = useQuery(GetBooks)
    return (
        <>
            <Head>
                <title>Example Page</title>
                {generateApolloStateScript(apolloStringifiedState)}
            </Head>
            <div>
                Here's an example page {JSON.stringify(data)}
            </div>
        </>
    )
}

export async function getStaticProps(context) {
    console.log('getStaticProps')
    const { ApolloLink } = await import('apollo-link')
    const {SchemaLink} = await import('@apollo/link-schema')
    const {createHttpLink} = await import('apollo-link-http')
    const schema = await import('../../graphql/schema')
    const link1 = new SchemaLink({ schema })
    // const link1 = createHttpLink({ uri: "/graphql" })
    const client = createApolloClient(link1)
    const {default: Page} = await import('./example')

    const {getMarkupFromTree} = await import('@apollo/react-ssr')
    await getMarkupFromTree({
        tree: (
            <ApolloProvider client={client}>
                <Page message={'hey'}/>
            </ApolloProvider>
        ),
    }).catch(e => console.log(e))

    console.log('finished markup')


    const extraction = client.extract()
    console.log(JSON.stringify(extraction))

    return {
        props: {
            apolloStringifiedState: JSON.stringify(extraction)
        }
    }
}

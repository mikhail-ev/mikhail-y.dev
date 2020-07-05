import React from 'react'
import Head from "next/head";
import Example from "../../components/example/example";
import {RestoredApolloClientProvider} from "../../components/restored-apollo-client-provider/restored-apollo-client-provider";

export default function ExamplePage({apolloState}) {
    return (
        <>
            <Head>
                <title>Example Page</title>
            </Head>
            <RestoredApolloClientProvider apolloState={apolloState}>
                <Example/>
            </RestoredApolloClientProvider>
        </>
    )
}

export async function getStaticProps() {
    const {getApolloStateFromComponent} = await import('../../helpers/ssr.js')
    // const {InMemoryCache, ApolloClient} = await import('@apollo/client')
    // const {SchemaLink} = await import('@apollo/link-schema')
    // const schema = await import('../../graphql/schema.js')
    // const client =  new ApolloClient({
    //     cache: new InMemoryCache(),
    //     ssrMode: true,
    //     link: new SchemaLink({schema: schema.default}),
    // })
    // const {ApolloProvider} = await import('@apollo/client')
    // const {getMarkupFromTree} = await import('@apollo/react-ssr')
    // await getMarkupFromTree({
    //     tree: (
    //         <ApolloProvider client={client}>
    //             <Example/>
    //         </ApolloProvider>
    //     )
    // }).catch(e => console.log(e))

    return {
        props: {
            apolloState: await getApolloStateFromComponent(Example)
        }
    }
}

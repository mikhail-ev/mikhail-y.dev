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
    return {
        props: {
            apolloState: await getApolloStateFromComponent(ExamplePage)
        }
    }
}

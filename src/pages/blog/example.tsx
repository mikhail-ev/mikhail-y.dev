import React from 'react'
import Head from "next/head";
import Example from "../../components/example/example";
import {RestoredApolloClientProvider} from "../../components/restored-apollo-client-provider/restored-apollo-client-provider";

export default function ExamplePage({apolloState, ...rest}) {
    return (
        <>
            <Head>
                <title>Example Page</title>
            </Head>
            <RestoredApolloClientProvider apolloState={apolloState}>
                <div>Page params: {JSON.stringify(rest)}</div>
                <Example/>
            </RestoredApolloClientProvider>
        </>
    )
}

export async function getStaticProps() {
    const {getApolloStateFromComponent} = await import('../../server/helpers/ssr.js')
    return {
        props: {
            apolloState: await getApolloStateFromComponent(ExamplePage)
        }
    }
}

import React from 'react'
import Head from "next/head";
import {RestoredApolloClientProvider} from "../../components/restored-apollo-client-provider/restored-apollo-client-provider";
import BuildTime from "../../components/build-time/build-time";

export default function DebugPage({apolloState}) {
    return (
        <>
            <Head>
                <title>App's info</title>
            </Head>
            <RestoredApolloClientProvider apolloState={apolloState}>
                <BuildTime/>
            </RestoredApolloClientProvider>
        </>
    )
}

export async function getStaticProps() {
    const {getApolloStateFromComponent} = await import('../../server/helpers/ssr.js')
    return {
        props: {
            apolloState: await getApolloStateFromComponent(DebugPage)
        }
    }
}

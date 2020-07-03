import Head from "next/head";

export default function MultipleInheritance() {
    return (
        <>
            <Head>
                <title>Multiple Inheritance in JavaScript</title>
            </Head>
            <div>
                Here's an article regarding multiple inheritance
            </div>
        </>
    )
}

export async function getStaticProps(context) {
    return {
        props: {}
    }
}

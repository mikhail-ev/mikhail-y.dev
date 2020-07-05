export async function getApolloStateFromComponent(Component) {
    const {InMemoryCache, ApolloClient} = await import('@apollo/client')
    const {SchemaLink} = await import('@apollo/link-schema')
    const schema = await import('../graphql/schema.js')
    const client =  new ApolloClient({
        cache: new InMemoryCache(),
        ssrMode: true,
        link: new SchemaLink({schema: schema.default}),
    })
    const {ApolloProvider} = await import('@apollo/client')
    const {getMarkupFromTree} = await import('@apollo/react-ssr')
    await getMarkupFromTree({
        tree: (
            <ApolloProvider client={client}>
                <Component/>
            </ApolloProvider>
        )
    }).catch(e => console.log(e))

    return client.extract()
}

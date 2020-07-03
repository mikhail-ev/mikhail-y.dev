export const APOLLO_STATE_KEY = '__APOLLO_STATE__'

const defaultState = JSON.stringify({})

export function generateApolloStateScript(stringifiedState = defaultState) {
    return (
        <script dangerouslySetInnerHTML={{
            __html: `window.${APOLLO_STATE_KEY}=${stringifiedState.replace(/</g, '\\u003c')};`,
        }}/>
    )
}

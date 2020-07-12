import GetSeverTime from './get-server-time.graphql'
import {useQuery} from "@apollo/client";

import css from './build-time.module.css'

const BuildTime = () => {
    const {data} = useQuery(GetSeverTime)
    return (
        <div className={css.content}>
            <div>The Application was build:</div>
            <div>{new Date(data?.serverTime).toUTCString()}</div>
        </div>
    )
}

export default BuildTime

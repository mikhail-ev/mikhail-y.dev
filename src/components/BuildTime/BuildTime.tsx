import GetSeverTime from './GetServerTime.graphql'
import {useQuery} from "@apollo/client";

import css from './BuildTime.module.css'

const BuildTime = () => {
    const {data} = useQuery(GetSeverTime)
    return (
        <div className={css.content}>
            <div>This page was build:</div>
            <div>{new Date(data?.serverTime).toUTCString()}</div>
        </div>
    )
}

export default BuildTime

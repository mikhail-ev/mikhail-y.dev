import React from 'react'
import GetBooks from './get-books.graphql'
import GetServerTime from './get-server-time.graphql'
import {useQuery} from "@apollo/react-hooks";

export default function Example() {
    const {data: booksData} = useQuery(GetBooks)
    const {data: timeData, refetch: refetchTime} = useQuery(GetServerTime)
    return (
        <>
            <div>Books: {JSON.stringify(booksData)}</div>
            <div>Time: {JSON.stringify(timeData)}</div>
            <button onClick={() => {
                console.log('refetch!')
                refetchTime()
            }}>Refetch time</button>
        </>
    )
}

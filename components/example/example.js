import React from 'react'
import GetBooks from './get-books.graphql'
import {useQuery} from "@apollo/client";

export default function Example() {
    const {data, loading} = useQuery(GetBooks)
    return (
        <>
            <div>loading: {loading}</div>
            <div>data: {JSON.stringify(data)}</div>
        </>
    )
}

import React from 'react'
import GetBooks from './get-books.graphql'
import {useQuery} from "@apollo/react-hooks";

export default function Example() {
    const {data: booksData} = useQuery(GetBooks)
    return (
        <>
            <div>Books: {JSON.stringify(booksData)}</div>
        </>
    )
}

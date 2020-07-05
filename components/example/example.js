import React from 'react'
import GetBooks from './get-books.graphql'
import {useQuery} from "@apollo/react-hooks";

function Data({data}) {
    return (
        <div>page-data: {JSON.stringify(data)}</div>
    )
}

export default function Example() {
    const {data} = useQuery(GetBooks)
    return (
        <>
            <Data data={data}/>
        </>
    )
}


import axios from "axios"

import Link from 'next/link'
import React from 'react'


export default function FetchUsers() {


function FetchUsers(){
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=>{
        console.log(res.data)
    })
}

    return <>
        <li>
            <Link href={"/"}>Home</Link>
        </li>
<hr />
        

        <button onClick={FetchUsers} >
            fetch-users
        </button>
    </>



}

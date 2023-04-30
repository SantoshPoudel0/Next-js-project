import React from 'react'

export default function Header(props) {  // {count:100,number:1000}
    console.log("header-rednder")
    return (
        <>
            <div>Header {props.count} - num:{props.number}</div>
            <hr />
        </>

    )
}

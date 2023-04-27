import React from 'react';
export default function Header(props){
    console.log("header-rednder")
    return (
        <>
        <div>Header {props.count} -num:{props.number}</div>
        <hr />
        </>
    )
}
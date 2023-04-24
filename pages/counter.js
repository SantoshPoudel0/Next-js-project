import { useState } from "react";

export default function Counter() {
    let count = 10


    function increment(){
        console.log("increment")
        count++;
        console.log({count});
    }


console.log("render")

    return (
        <>
       <h1>Count <span id="count">{count}</span></h1>
     <button onClick={increment} >increment</button>
        </>
    )
}
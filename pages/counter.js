import { useState } from "react"
import Header from "@/components/Header"

export default function counter() {

    console.log("top");

    let inital_value = 10
    // let number = 100
    let time = "10pxm"

    let [count, setCount] = useState(inital_value)  // returns [ 10, mutaterFunction     ]

    let [number, setNumber] = useState(100)  //   [ 100 , mutatorFunction    ]

    function increment() {
        console.log("increment")
        // count++
        // console.log({ count })
        // setCount((prev) => prev + 1)
        setCount(++count)
    }

    function incrementNumber() {
        // number = number + 1
        // number++
        // console.log("increment", number);


        setNumber(number + 1)  //101

        // setNumber((prev) => { return prev + 1 })
        // setNumber((prev) => { return prev + 1 })
        // setNumber((prev) => { return prev + 1 })

        console.log("updated-number", number)
    }
    

    console.log("counter-re-render")

    return (
        <>
            <Header count={count} number={number} />
            <h1>Number: {number}</h1>
            <h1>count<span id="count"> {count} </span> </h1>
            <button onClick={increment}>increment</button>
            <button onClick={incrementNumber}>incrementNumber</button>
        </>
    )
}

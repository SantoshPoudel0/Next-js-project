import Link from "next/link"
import {useState} from "react"



export default function counter() {
    let initial_value = 10
    let [count, setCount] = useState(initial_value)
    function increment() {
        console.log("increment")
        count++
        // console.log({count})
        // setCount ((prev)=> prev + 1 )
        setCount(count ++)


    }
    function decrement() {
        console.log("decrement")
        count++
        // console.log({count})
        // setCount ((prev)=> prev + 1 )
        setCount ((prev)=> prev - 1 )


    }
    console.log("re-render")
    console.log("re-render")


    return (
        <>
            <ul>
                <li>
                    <Link href="/">home</Link>
                </li>
               
            </ul>
            <h1>Count {count} </h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrementt</button>

        </>
    )
}

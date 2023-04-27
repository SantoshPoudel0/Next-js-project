import Link from "next/link"

Link

export default function counter() {
    let count = 10
    function increment() {
        console.log("increment")
        count++
        console.log({count})

    }
    console.log("render")


    return (
        <>
            <ul>
                <li>
                    <Link href="/">home</Link>
                </li>
               
            </ul>
            <h1>Count {count} </h1>
            <button onClick={increment}>increment</button>

        </>
    )
}

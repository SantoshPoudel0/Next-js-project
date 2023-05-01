import Link from "next/link"
import { useState } from "react"
const login=() =>{
    // let input_value = "test"
    const [input_value, setInputvalue] = useState("test")

    function changeInput(event){
        setInputvalue(event.target.value)

    }

    return <>
            <ul>
            <li>
                <Link href="/">home</Link>
            </li>

        </ul>
    <form>
        <p>input value is {input_value}</p>
        <input onChange={changeInput}/>
     <input/>
    

        <button>submit</button>
    </form>
    </>
}
export default login
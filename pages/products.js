
import Product from "@/components/Product"
import Link from "next/link"
function Products () {


    return <>
    <ul>
                <li>
                    <Link href="/">home</Link>
                </li>
               
            </ul>

<h1>Products</h1>
<p>This is a simple and crazy page which is only made to practice NEXT-JS.</p>
<hr/>
    
     <Product name="one" description = "descripiion - one" />
     <Product name="two" description = "descripiion - one" />
     <Product name="three" description = "descripiion - one" />
     <Product name="four" description = "descripiion - one" />



     


    </>
    
}

export default Products

import Product from "../components/product"
export default function Products() {

    let product_style = {
        border: "1px solid black"
    }
    let color = "red"

    return (
        <>
            <div style={{ color: color }}>Products</div>
            <hr />
            <h1>Props</h1>
            <hr />
            <Product/>
            <Product/>
            <Product/>


        </>

    )

    }

import Product from "../components/product"
export default function Products() {

    let santosh = {
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
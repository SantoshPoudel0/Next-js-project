import styles from "@/styles/Product.module.css"
import { Addtocard } from "./Addtocard"

export default function Product(props) {

    console.log("re-render-product")
   return   <div className={styles.product}>
   <p>{props.name}</p>
   <p>{props.description}</p>
   <Addtocard />
   <button>deletebutton</button>


</div>
}
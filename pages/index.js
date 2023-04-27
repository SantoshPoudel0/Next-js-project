import Link from "next/link"


function Index() {
  // let pageTittle = "Home page"
  return <div>
    {/* <p>{pageTittle}</p> */}
    <h1>This is the bigger home page which has lots of list of pages   </h1>
    <>
      <ul>
        <li>
          <Link href={"/products"} >products</Link>
        </li>
        <li>
          <Link href={"/profile"} >profiles</Link>


        </li>
        <li>
          <Link href={"/counter"} >Counter</Link>


        </li>
        <li>
          <Link href={"/users"} >users</Link>


        </li>
      </ul>
    </>

  </div>



}
export default Index



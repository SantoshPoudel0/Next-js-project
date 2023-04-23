import Link from "next/link"


function Index() {
  let pageTittle = "Home page"
  return <div>
    <p>{pageTittle}</p>
    <h1>This is the bigger home page </h1>
    <>
      <ul>
        <li>
          <Link href={"/products"} >products</Link>
          </li>
          <li>
            <Link href={"/profile"} >profiles</Link>
          </li>
      </ul>
    </>

  </div>



}
export default Index



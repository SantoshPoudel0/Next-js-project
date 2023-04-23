import Link from "next/link";


function Profile() {

    let logged_status = true;

    return <>
        
        <ul>
                <li>
                    <Link href="/">home</Link>
                </li>
               
            </ul>
            <h1>profile page</h1>
        <hr />
        {
            logged_status
                ?
                <>

                    <h1>Name : Ram</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s</p>
                </>
                :
                <p>user not log in</p>
        }
    </>
}

export default Profile
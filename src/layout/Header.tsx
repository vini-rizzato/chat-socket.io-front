'use client'
import Link from "next/link"
import { useRouter } from "next/router";

const Header = () => {

    const router = useRouter();

    const authValidator = localStorage.getItem('token')?true:false;
    if(authValidator){
        router.push("/login");
    }

    return(
        <>
            <div className="py-4 flex justify-between min-w-[1200px]">
                <p className="uppercase">Chat</p>
                {authValidator? <div className="flex gap-4">
                    <Link href={"/login"}>Login</Link>
                    <Link href={"/register"}>Register</Link>
                </div>:<div><Link href={"/conta"}></Link></div>}
            </div>
        </>
    )
}

export default Header;
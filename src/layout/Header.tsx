import Link from "next/link"

const Header = () => {
    return(
        <>
            <div className="py-4 flex justify-between">
                <p className="uppercase">Chat</p>
                <Link href={"/login"}>Login</Link>
            </div>
        </>
    )
}

export default Header;
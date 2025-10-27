import Link from "next/link"

const Header = () => {
    return(
        <>
            <div className="py-4 flex justify-between min-w-[1200px]">
                <p className="uppercase">Chat</p>
                <div className="flex gap-4">
                    <Link href={"/login"}>Login</Link>
                    <Link href={"/register"}>Register</Link>
                </div>
            </div>
        </>
    )
}

export default Header;
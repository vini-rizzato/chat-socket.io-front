import Header from "@/src/layout/Header"
import { useEffect } from "react";
import { useRouter } from "next/router";
import auth from "@/src/auth";

const Home = () => {

    const token = localStorage.getItem('token');
    const router = useRouter();

    if(!token){
        router.push("/login");
    };

useEffect(() => {
    const validaTokenAuth = auth({
        token: token
    });
});    

    return(
        <>
            <div className="">
                <Header />
            </div>
        </>
    )
}

export default Home;
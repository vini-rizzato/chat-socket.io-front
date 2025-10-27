import Header from "@/src/layout/Header"
import FormLogin from "@/src/components/FormLogin";

const Login = () => {
    return(
        <>
            <div className="flex justify-between h-full items-center flex-col">
                <Header />
                <FormLogin />
                <div></div>
            </div>
        </>
    )
}

export default Login;
import FormRegister from "@/src/components/FormRegister";
import Header from "@/src/layout/Header";

const Register = () => {
    return(
        <>
            <div className="flex justify-between h-full items-center flex-col">
                <Header />
                <FormRegister />
                <div></div>
            </div>
        </>
    )
}

export default Register;
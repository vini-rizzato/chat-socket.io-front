'use client'
import register from "@/src/services/register";
import { useState } from "react";

const FormRegister = () => {

    interface registerProps{
        nome: string,
        email: string,
        senha: string
    };

    const [formData, setFormData] = useState<registerProps>({
        nome: '',
        email: '',
        senha: ''
    });

    const [mensagem, setMensagem] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent) => {
        try{
            e.preventDefault();

            const registerSubmit = await register({
                nome: formData.nome,
                email: formData.email,
                senha: formData.senha
            });

            if(registerSubmit.status === 201){
                setMensagem("Usuário registrado com sucesso!");
            }else if(registerSubmit.status === 400){
                setMensagem("Dados inválidos, verifique os campos.");
            }else if (registerSubmit.status === 409) {
                setMensagem("Usuário já cadastrado.");
            } else {
                setMensagem(registerSubmit.message || "Ocorreu um erro desconhecido.");
            }

        }catch(err){
            console.log("Registro Falhou");
        };
    };

    return(
        <>
            <div className="bg-secondary-100 max-w-xs py-4 rounded-lg text-center px-4">
                <h1 className="pb-4">Register</h1>
                <form className="flex flex-col justify-center items-center gap-4" onSubmit={handleSubmit}>
                    <label htmlFor="nome">
                        Nome
                        <input type="text" name="nome" id="nome" onChange={(e) => setFormData({ ...formData, nome: e.target.value })} className="bg-white" />
                    </label>

                    <label htmlFor="email">
                        Email
                        <input type="email" name="email" id="email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="bg-white" />
                    </label>

                    <label htmlFor="senha">
                        Senha
                        <input type="password" name="senha" id="senha" onChange={(e) => setFormData({ ...formData, senha: e.target.value })} className="bg-white" />
                    </label>

                    <input type="submit" className="bg-primary px-6 py-2 rounded-lg hover:bg-primary-300 cursor-pointer duration-200" />
                </form>
                <div>{mensagem}</div>
            </div>
        </>
    )
}

export default FormRegister;
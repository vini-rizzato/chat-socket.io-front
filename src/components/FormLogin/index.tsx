'use client'
import login from "@/src/services/login";
import { useState } from "react";

const FormLogin = () => { 

  interface FormDataProps{
    email: string,
    senha: string
  }

  const [formData, setFormData] = useState<FormDataProps>({
    email: "",
    senha: ""
  })

  const [mensagem, setMensagem] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    try{
      e.preventDefault();

      const loginEnvioApi = await login({
        email: formData.email,
        senha: formData.senha
      })

      if(loginEnvioApi.status === 200){
        setMensagem("Login realizado com sucesso.");
        localStorage.setItem('token:', loginEnvioApi.token);
      }else if(loginEnvioApi.status === 400){
        setMensagem("Login ou senha não estão corretos.");
      }else if(loginEnvioApi.status === 409){
        setMensagem("Usuário não encontrado.");
      }else{
        setMensagem("Erro do servidor.");
        console.log(loginEnvioApi.status);
      }
    }catch(err){
      console.error("Login falhou.");
    }
  }

  return (
    <>
      <div className="bg-secondary-100 max-w-xs py-4 rounded-lg text-center px-4">
        <h1 className="pb-4">Login</h1>
        <form name="login" id="login" className="flex flex-col justify-center items-center gap-4" onSubmit={handleSubmit}>
          <label htmlFor="email">
            Email
            <input type="email" name="email" className="bg-white" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          </label>

          <label htmlFor="senha">
            Senha
            <input type="password" name="senha" className="bg-white" value={formData.senha} onChange={(e) => setFormData({ ...formData, senha: e.target.value})} />
          </label>

          <input type="submit" className="bg-primary px-6 py-2 rounded-lg hover:bg-primary-300 cursor-pointer duration-200" />
        </form>
        <p>{mensagem}</p>
      </div>
    </>
  );
}

export default FormLogin;

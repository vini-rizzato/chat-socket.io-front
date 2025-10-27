import axios from "axios";

interface dataRegisterProps{
    nome: string,
    email: string,
    senha: string
}

export default async function register(data: dataRegisterProps){
    try{
        const { nome, email, senha } = data;

        const payloadRegister = {
            nome, 
            email, 
            senha
        }

        const resposta = await axios.post("http://localhost:8080/register", payloadRegister);

        return resposta.data;

    }catch(erro:any){
        if(erro.response) {
            return { status: erro.response.status, message: erro.response.data?.message };
        }else{
            return { status: 0, message: "Servidor não responder" };
        }
    }
}
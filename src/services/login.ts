import axios from "axios";

interface dataLoginProps{
    email: string,
    senha: string
}

export default async function login(data: dataLoginProps){
    try{
        const {email, senha} = data;

        const payloadLogin = {
            email,
            senha
        }

        const resposta = await axios.post("http://localhost:8080/login", payloadLogin);

        return { status: resposta.status, ...resposta.data };
        
    }catch(erro: any){
         if(erro.response) {
            return { status: erro.response.status, message: erro.response.data?.message };
        }else{
            return { status: 0, message: "Servidor não respondeu." };
        }
    }
}
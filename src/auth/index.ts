import axios from "axios";

interface data{
    token: string
}

export default async function auth(data: data){
    try{
        const {token} = data;

        const payloadData = {
            token
        };

        const auth = await axios.post("localhost:8080/auth", payloadData);
        return { status: auth.status, ...auth.data };
    }catch(erro: any){
        if(erro.reponse){
            return {status: erro.reponse.staus, message: erro.response.data?.erro};
        }else{
            return {status: 0, message: "Servidor falhou."}
        }
    };
};
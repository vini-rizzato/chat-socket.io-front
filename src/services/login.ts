import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

interface loginProps{
    email: string,
    senha: string
}

const login =  await axios.post(`${process.env.API_URL}/login`, (data: loginProps) => {
    const {email, senha} = data;
    const payloadLogin = {
        email: email,
        senha: senha
    }

    return payloadLogin;
});

export default login;
'use client'
import login from "@/src/services/login";
import Form from "next/form";

const FormLogin = () => { 

  const login = async () => {
    console.log(login);
  }

  return (
    <>
      <div>
        <Form action="/login" name="login" id="login">
          <label htmlFor="email">
            Email
            <input type="email" name="email" />
          </label>

          <label htmlFor="senha">
            <input type="password" name="senha" />
          </label>

          <input type="submit" onClick={() => login}/>
        </Form>
      </div>
    </>
  );
}

export default FormLogin;

import login from "@/src/services/login";

const formLogin  = () => {

  return (
    <>
      <div>
        <form>
          <label htmlFor="email">
            Email
            <input type="email" name="email" />
          </label>

          <label htmlFor="senha">
            <input type="password" name="senha" />
          </label>

          <input type="submit" />
        </form>
      </div>
    </>
  );
}

export default formLogin;

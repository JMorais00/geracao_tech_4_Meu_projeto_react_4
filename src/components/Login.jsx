import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleLogin(event) {
    event.preventDefault();
    alert(`Bem-vindo(a)! E-mail: ${email}`);
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h1>Minha Loja</h1>
        <p>Entre na sua conta</p>

        <label>E-mail</label>
        <InputText
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu e-mail"
          type="email"
          required
        />

        <label>Senha</label>
        <Password
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Digite sua senha"
          toggleMask
          feedback={false}
          required
        />

        <Button type="submit" label="Entrar" />
      </form>
    </div>
  );
}

export default Login;

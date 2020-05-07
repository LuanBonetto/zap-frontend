import React from "react";
import Container from "react-bootstrap/Container";
import zapLogo from "../../utils/zapLogo.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {
  container,
  logo,
  title,
  form,
  formGroup,
  label,
  input,
  buttonLink,
  buttonEnter,
} from "./style";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { useState } from "react";
import { login } from "../../actions/user"

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  function goToSignUpPage() {
    dispatch(push("/signup"));
  }

  function goToRedefinePasswordPage() {
    dispatch(push("/redefinePassword"));
  }

  function sendLogin(event){
    event.preventDefault()
    const user = {
      email,
      password
    }
    dispatch(login(user))
  }

  return (
    <Container style={container}>
      <img alt="logo" style={logo} src={zapLogo} />
      <h1 style={title}>É ruim de conversar no Messenger?</h1>
      <h1 style={title}>Então manda um Zap!</h1>
      <Form style={form} onSubmit={sendLogin}>
        <Form.Group style={formGroup}>
          <Form.Label style={label}>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            style={input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Label style={label}>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Senha"
            style={input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            style={buttonLink}
            variant="link"
            onClick={goToRedefinePasswordPage}
          >
            Esqueci minha senha
          </Button>
          <Button style={buttonLink} variant="link" onClick={goToSignUpPage}>
            Cadastre-se
          </Button>
          <Button style={buttonEnter} variant="success" type="submit">
            Entrar
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default LoginPage;

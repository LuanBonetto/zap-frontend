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
import { useDispatch } from "react-redux"
import { push } from "connected-react-router"

function LoginPage(props) {
  const dispatch = useDispatch()

  function goToSignUpPage(){
    dispatch(push("/signup"))
  }

  function goToRedefinePasswordPage(){
    dispatch(push("/redefinePassword"))
  }

  return (
    <Container style={container}>
      <img alt="logo" style={logo} src={zapLogo} />
      <h1 style={title}>É ruim de conversar no Messenger?</h1>
      <h1 style={title}>Então manda um Zap!</h1>
      <Form style={form}>
        <Form.Group style={formGroup}>
          <Form.Label style={label}>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" style={input} />
          <Form.Label style={label}>Senha</Form.Label>
          <Form.Control type="password" placeholder="Senha" style={input} />
          <Button style={buttonLink} variant="link" onClick={goToRedefinePasswordPage}>
            Esqueci minha senha
          </Button>
          <Button style={buttonLink} variant="link" onClick={goToSignUpPage}>
            Cadastre-se
          </Button>
          <Button style={buttonEnter} variant="success">
            Entrar
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default LoginPage;

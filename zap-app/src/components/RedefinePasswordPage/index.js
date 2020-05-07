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
  buttonEnter,
} from "./style";

function LoginPage(props) {

  return (
    <Container style={container}>
      <img alt="logo" style={logo} src={zapLogo} />
      <h1 style={title}>Esqueci Minha Senha</h1>
      <Form style={form}>
        <Form.Group style={formGroup}>
          <Form.Label style={label}>Digite o email da sua conta</Form.Label>
          <Form.Control type="email" placeholder="Email" style={input} />
          <Button style={buttonEnter} variant="success">
            Enviar
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default LoginPage;

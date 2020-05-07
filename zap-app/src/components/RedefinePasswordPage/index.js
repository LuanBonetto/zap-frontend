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
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendRedefinePassword } from "../../actions/user"

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  function onSubmitRedefinePassword(event){
    event.preventDefault()
    dispatch(sendRedefinePassword(email))
  }

  return (
    <Container style={container}>
      <img alt="logo" style={logo} src={zapLogo} />
      <h1 style={title}>Esqueci Minha Senha</h1>
      <Form style={form} onSubmit={onSubmitRedefinePassword}>
        <Form.Group style={formGroup}>
          <Form.Label style={label}>Digite o email da sua conta</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            style={input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button style={buttonEnter} variant="success" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default LoginPage;

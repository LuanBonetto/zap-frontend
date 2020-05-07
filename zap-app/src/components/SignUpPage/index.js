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
import { signUp } from "../../actions/user"
import { useDispatch } from 'react-redux'

function LoginPage(props) {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("")
  const dispatch = useDispatch()

  function sendSignUp(event){
    event.preventDefault()
    const newUser = {
      nickname,
      email,
      password,
      photo
    }
    dispatch(signUp(newUser))
  }

  return (
    <Container style={container}>
      <img alt="logo" style={logo} src={zapLogo} />
      <h1 style={title}>Cadastro</h1>
      <Form style={form} onSubmit={sendSignUp}>
        <Form.Group style={formGroup}>
          <Form.Label style={label}>Apelido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Apelido"
            style={input}
            value={nickname}
            onChange={e => setNickname(e.target.value)}
          />
          <Form.Label style={label}>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            style={input}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Label style={label}>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Senha"
            style={input}
            value={password}
            onChange={e => setPassword(e.target.value)}
          ></Form.Control>
          <Form.Label style={label}>Foto de Perfil</Form.Label>
          <Form.Control
            type="text"
            placeholder="Cole aqui a url de uma imagem"
            style={input}
            value={photo}
            onChange={e => setPhoto(e.target.value)}
          ></Form.Control>
          <Button style={buttonEnter} type="submit" variant="success">
            Cadastrar
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default LoginPage;

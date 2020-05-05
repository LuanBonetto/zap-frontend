import React from "react";
import Container from 'react-bootstrap/Container';
import zapLogo from '../../utils/zapLogo.png';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { container, logo, title, form, formGroup, label, input, buttonLink, buttonEnter } from './style'



function LoginPage(props){
    return (
        <Container style={container}>
            <img alt="logo" style={logo} src={zapLogo} />
            <h1 style={title}>É ruim de conversar no Messenger?</h1>
            <h1 style={title}>Então manda um Zap!</h1>
            <Form style={form}>
                <Form.Group style={formGroup}>
                    <Form.Label style={label}>Email</Form.Label>
                    <Form.Control type="email" placeholder="example@gmail.com" style={input} />
                    <Form.Label style={label}>Senha</Form.Label>
                    <Form.Control type="password" placeholder="Senha" style={input}></Form.Control>
                    <Button style={buttonLink} variant="link">Esqueci minha senha</Button>
                    <Button style={buttonLink} variant="link">Cadastre-se</Button>
                    <Button style={buttonEnter} variant="success">Entrar</Button>
                </Form.Group>
            </Form>
        </Container>
    )
}

export default LoginPage;
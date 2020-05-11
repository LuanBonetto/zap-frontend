import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form"

export const form = {
  display: "flex",
  flexDirection: "column",
}

export const input = {
  width: "100%"
}

export const buttonSubmit = {
  alignSelf: "flex-end",
  margin: "10px 0 0 0"
}

function ModalInviteFriend(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Enviar pedido de amizade</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form style={form}>
          <Form.Control type="email" placeholder="Email do usuário" style={input}/>
          <Button variant="success" type="submit" style={buttonSubmit}>
            Enviar
          </Button>
        </Form>
      </Modal.Body>

    </Modal>
  );
}

export default ModalInviteFriend;

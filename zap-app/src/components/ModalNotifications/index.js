import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

export const photo = {
  width: "50px",
  backgroundColor: "#FFF",
  margin: "10px 0 10px 25px",
};

export const titleName = {
  display: "inline",
  fontSize: "20px",
  margin: "0 0 0 10px",
  color: "#000",
};

export const miniCard = {
  display: "flex",
  justifyContent: "space-between"
}

export const divProfile = {
  display: "inline",
}

export const divButtons = {
  display: "inline",
  margin: "11px 0 0 0"
}

export const buttonDanger = {
  margin: "0 0 0 5px"
}

function ModalNotifications(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Pedidos de Amizade</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={miniCard}>
          <div style={divProfile}>
            <Image
              style={photo}
              src="https://lh3.googleusercontent.com/proxy/Iu81aOGVhxRp5A1K4zKjwIxEDPo2qItE1s8veh2gTeSFNNRpgNDATBUJ8NAD-ygbtbnpXlV033GyaIW3GXbctE0yhh98Z1J9M1PFJBn6sx_J_KXp"
              roundedCircle
            />
            <h1 style={titleName}>Luan</h1>
          </div>
          <div style={divButtons}>
            <Button variant="success">Aceitar</Button>
            <Button variant="danger" style={buttonDanger}>Recusar</Button>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalNotifications;

import React from "react";
import Image from "react-bootstrap/Image";

export const header = {
  position: "fixed",
  width: "70%",
  zIndex: "3",
  backgroundColor: "#216869",
};

export const photo = {
  width: "50px",
  backgroundColor: "#FFF",
  margin: "10px 0 10px 25px",
};

export const titleName = {
  display: "inline",
  fontSize: "20px",
  margin: "0 0 0 10px",
  color: "#F4F6FB"
}

function HeaderChat() {
  return (
    <div style={header}>
      <Image
        style={photo}
        src="https://lh3.googleusercontent.com/proxy/Iu81aOGVhxRp5A1K4zKjwIxEDPo2qItE1s8veh2gTeSFNNRpgNDATBUJ8NAD-ygbtbnpXlV033GyaIW3GXbctE0yhh98Z1J9M1PFJBn6sx_J_KXp"
        roundedCircle
      />
      <h1 style={titleName}>
        Luan
      </h1>
    </div>
  );
}

export default HeaderChat;

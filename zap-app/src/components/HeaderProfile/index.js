import React, { useState } from "react";
import { BsFillPersonPlusFill, BsFillBellFill } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Image from "react-bootstrap/Image";
import ModalNotifications from "../ModalNotifications/index";
import ModalInviteFriend from "../ModalInviteFriend/index"

export const headerDiv = {
  display: "flex",
  backgroundColor: "#216869",
  width: "100%",
  justifyContent: "space-between",
  padding: "0 25px 0 0",
  borderRight: "1px solid black",
  borderRadius: "2px"
};

export const iconAddFriend = {
  color: "#F4F6FB",
  fontSize: "30px",
};

export const iconNotification = {
  color: "#F4F6FB",
  fontSize: "25px",
};

export const buttonAddFriend = {
  width: "50px",
  margin: "11.5px 0 11.5px 0",
  borderRadius: "50%",
};

export const badgeNotification = {
  position: "absolute",
  margin: "23px",
};

export const photo = {
  width: "50px",
  backgroundColor: "#FFF",
  margin: "10px 0 10px 25px",
};

function HeaderProfile() {

  const [showNotifications, setShowNotifications] = useState(false);
  const [showInvite, setShowInvite] = useState(false);

  const handleCloseNotifications = () => setShowNotifications(false);
  const handleShowNotifications = () => setShowNotifications(true);
  const handleCloseInvite = () => setShowInvite(false);
  const handleShowInvite = () => setShowInvite(true);

  return (
    <>
      <div style={headerDiv}>
        <Image
          hover
          style={photo}
          src="https://lh3.googleusercontent.com/proxy/Iu81aOGVhxRp5A1K4zKjwIxEDPo2qItE1s8veh2gTeSFNNRpgNDATBUJ8NAD-ygbtbnpXlV033GyaIW3GXbctE0yhh98Z1J9M1PFJBn6sx_J_KXp"
          roundedCircle
        />
        <div>
          <Button style={buttonAddFriend} variant="none" onClick={handleShowInvite}>
            <BsFillPersonPlusFill style={iconAddFriend} />
          </Button>
          <Button style={buttonAddFriend} variant="none" onClick={handleShowNotifications}>
            <Badge style={badgeNotification} variant="danger">
              1
            </Badge>
            <BsFillBellFill style={iconNotification} />
          </Button>
        </div>
      </div>
      <ModalNotifications
        show={showNotifications}
        handleClose={handleCloseNotifications}
      />
      <ModalInviteFriend
        show={showInvite}
        handleClose={handleCloseInvite}
      />
    </>
  );
}

export default HeaderProfile;

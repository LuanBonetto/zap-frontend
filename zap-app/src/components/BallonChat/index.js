import React from "react"
import Card from "react-bootstrap/Card"

export const ballon = {
  alignSelf: "flex-end",
  padding: "7px",
  margin: "10px 30px",
  fontSize: "14.5px",
  maxWidth: "60%"
}

export const text = {
  wordWrap: "break-word",
  maxWidth: "100%"
}

export const footer = {
  padding: "0px",
  backgroundColor: "#FFF"
}

function BallonChat() {


  return (
    <Card variant="success" style={ballon}>
      <Card.Text style={text}>
        Teste AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </Card.Text>
      <Card.Footer className="text-muted" style={footer}>
        10:10
      </Card.Footer>
    </Card>
  )
}

export default BallonChat

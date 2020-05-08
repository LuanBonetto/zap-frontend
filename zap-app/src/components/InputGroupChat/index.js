import React from "react"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"

export const inputDiv = {
  backgroundColor: "#216869",
  width: "100%",
  alignSelf: "flex-end",
  padding: "10px 25px"
}

function InputGroupChat(){
  return (
    <div style={inputDiv}>
      <InputGroup className="mb-3">
        <FormControl placeholder="Digite uma mensagem" as="textarea" aria-label="With textarea" />
        <InputGroup.Append>
          <Button variant="dark">Enviar</Button>
          </InputGroup.Append>
      </InputGroup>
    </div>
  )
}

export default InputGroupChat;

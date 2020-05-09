import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { IoMdSend } from "react-icons/io";

export const inputDiv = {
  backgroundColor: "#216869",
  width: "100%",
  alignSelf: "flex-end",
  padding: "10px 25px",
};

export const textarea = {
  resize: "none",
};

function InputGroupChat() {
  return (
    <div style={inputDiv}>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Digite uma mensagem"
          as="textarea"
          aria-label="With textarea"
          style={textarea}
        />
        <InputGroup.Append>
          <Button variant="dark">
            <IoMdSend />
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
}

export default InputGroupChat;

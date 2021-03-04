// vendor
import React, { useState, useEffect, useRef } from "react";

// styles
import { InputStyled, FormStyled, Buttontyled } from "./Input.styled";

const Input = (props) => {
  const [text, setText] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    props.onSendMessage(text);
    setText("");
  };

  return (
    <div>
      <FormStyled onSubmit={(e) => onSubmit(e)}>
        <InputStyled
          onChange={(e) => setText(e.target.value)}
          value={text}
          type="text"
          placeholder="Enter your message and press ENTER"
          ref={inputRef}
        />
        <Buttontyled>Send</Buttontyled>
      </FormStyled>
    </div>
  );
};

export default Input;

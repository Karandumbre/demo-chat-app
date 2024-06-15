import React, { useState } from "react";
import Messages from "./components/Messages/Messages";
import Input from "./components/Input/Input";
import { MessageArray, currentMember } from "./constants/message";

export const App = () => {
  const [messages, setMessages] = useState([...MessageArray]);

  const onSendMessage = (message) => {
    setMessages([...messages, { ...currentMember, text: message }]);
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>React Chat App</h1>
      </div>
      <Messages messages={messages} currentMember={currentMember} />
      <Input onSendMessage={onSendMessage} />
    </div>
  );
};

export default App;

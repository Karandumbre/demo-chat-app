import React, { Component } from "react";
import "./App.css";
import Messages from "./components/Messages/Messages";
import Input from "./components/Input/Input";
import MessageArray, { currentMember } from "./constants/message";

class App extends Component {
  state = {
    messages: [...MessageArray],
    member: {
      ...currentMember,
    },
  };

  onSendMessage = (message) => {
    const messages = this.state.messages;
    messages.push({ ...this.state.member, text: message });
    this.setState({ messages });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>React Chat App</h1>
        </div>
        <Messages
          messages={this.state.messages}
          currentMember={this.state.member}
        />
        <Input onSendMessage={this.onSendMessage} />
      </div>
    );
  }
}

export default App;

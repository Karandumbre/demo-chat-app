// vendor
import React from "react";

// styles
import {
  MessageContentStyled,
  MessageUsernameStyled,
  MessageTextStyled,
  MessageAvatarStyled,
  MessagesListStyled,
  MessagesWrapperStyled,
} from "./Message.styled";

const Messages = ({ messages, currentMember }) => {
  const renderMessage = (message, index) => {
    const { id, text } = message;
    const isCurrentUser = id === currentMember.id;
    const isGroupingPossible = id === messages[index - 1]?.id;

    return (
      <MessagesWrapperStyled
        type={isCurrentUser ? "current" : "other"}
        isCurrentUser={isCurrentUser}
      >
        <MessageAvatarStyled
          backgroundColor={message.color}
          isGroupingPossible={isGroupingPossible}
        />
        <MessageContentStyled isCurrentUser={isCurrentUser}>
          <MessageUsernameStyled isGroupingPossible={isGroupingPossible}>
            {message.username}
          </MessageUsernameStyled>
          <MessageTextStyled
            isCurrentUser={isCurrentUser}
            isGroupingPossible={isGroupingPossible}
          >
            {text}
          </MessageTextStyled>
        </MessageContentStyled>
      </MessagesWrapperStyled>
    );
  };

  return (
    <MessagesListStyled>
      {messages.map((message, index) => (
        <React.Fragment key={`Messages-${index}`}>
          {renderMessage(message, index)}
        </React.Fragment>
      ))}
    </MessagesListStyled>
  );
};

export default Messages;

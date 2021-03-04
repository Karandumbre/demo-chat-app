import styled, { css } from "styled-components";

export const MessageContentStyled = styled.div`
  display: inline-block;
  align-items: ${(props) => props.isCurrentUser && "flex-end"};
`;

export const MessageUsernameStyled = styled.div`
  display: block;
  color: gray;
  font-size: 14px;
  padding-bottom: 4px;
  display: ${(props) => props.isGroupingPossible && "none"};
`;

export const MessageTextStyled = styled.div`
  padding: 10px;
  max-width: 400px;
  margin: 0;
  border-radius: 12px;
  background-color: ${(props) => (props.isCurrentUser ? "#DCF8C6" : "#ebebeb")};
  margin-right: ${(props) =>
    props.isGroupingPossible && props.isCurrentUser && "55px"};
  margin-left: ${(props) =>
    props.isGroupingPossible && !props.isCurrentUser && "55px"};
  color: black;
  display: inline-block;
`;

export const MessageAvatarStyled = styled.span`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  display: inline-block;
  margin: 0 10px -10px;
  background-color: ${(props) => props.backgroundColor};
  display: ${(props) => props.isGroupingPossible && "none"};
`;

export const MessagesListStyled = styled.ul`
  padding: 20px 0;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  list-style: none;
  padding-left: 0;
  flex-grow: 1;
  overflow: auto;
`;

export const MessagesWrapperStyled = styled.div`
  display: flex;
  margin-top: 10px;
  ${(props) =>
    props.isCurrentUser &&
    css`
      flex-direction: row-reverse;
      text-align: right;
    `}
`;

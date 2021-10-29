import React from "react";
import styled from "styled-components";

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  align-items: ${(props) => props.own === true && "flex-end"};
`;

const MessageTop = styled.div`
  display: flex;
  align-items: center;
`;

const MessageText = styled.div`
  font-size: 1.6rem;
  padding: 1rem;
  background-color: ${(props) => (props.own === true ? "#e2e2e2" : "#1877f2")};
  color: ${(props) => (props.own === true ? "black" : "white")};
  border-radius: 2rem;
  max-width: 30rem;
`;
const UserName = styled.h6`
  font-size: 1.3rem;
  font-weight: 600;
  width: 7rem;
  text-transform: capitalize;
`;
const Text = styled.p`
  font-size: 1.6rem;
`;
const Messagebottom = styled.div`
  font-size: 1.2rem;
  color: gray;
`;

const Message = () => {
  const own = true;
  return (
    <MessageContainer own={own}>
      <MessageTop className="messageTop">
        <MessageText>
          <UserName own={own} className="messageusername">
            paul
          </UserName>
          <Text own={own}>how are you</Text>
        </MessageText>
      </MessageTop>
      <Messagebottom className="messagebottom">2 days ago</Messagebottom>
    </MessageContainer>
  );
};

export default Message;

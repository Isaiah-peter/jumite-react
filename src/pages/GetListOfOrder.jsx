import React from "react";
import styled from "styled-components";
import Message from "../component/Message";
import Navbar from "../component/Navbar";
import OrderInfos from "../component/OrderInfo";

const Container = styled.div``;
const Wrapper = styled.div`
  margin-top: 7rem;
  display: flex;
`;

const Orders = styled.div`
  flex: 1.5;
  border-right: 1px solid #897de1;
  height: calc(100vh - 7rem);
  overflow-y: scroll;
`;

const Messagepage = styled.div`
  flex: 4;
  height: calc(100vh - 10rem);
  padding: 1rem;
`;

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 100%;
`;

const ChatBoxTop = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding-right: 10px;
  height: 70%;
`;
const ChatBoxBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
const InputText = styled.textarea`
  width: 80%;
  height: 9rem;
  padding: 1rem;
`;
const Button = styled.button`
  color: white;
  border: none;
  outline: none;
  background-color: teal;
  width: 7rem;
  height: 4rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;

const GetListOfOrder = () => {
  return (
    <Container>
      <Navbar navcolor="897DE1" />
      <Wrapper>
        <Orders>
          <OrderInfos />
          <OrderInfos />
          <OrderInfos />
        </Orders>
        <Messagepage>
          <MessageWrapper>
            <ChatBoxTop>
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
            </ChatBoxTop>
            <ChatBoxBottom>
              <InputText placeholder="write message"></InputText>
              <Button className="sendmessage">send</Button>
            </ChatBoxBottom>
          </MessageWrapper>
        </Messagepage>
      </Wrapper>
    </Container>
  );
};

export default GetListOfOrder;

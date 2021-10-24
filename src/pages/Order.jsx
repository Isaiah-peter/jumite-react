import React from "react";
import styled from "styled-components";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  padding: 20px;
  background-color: white;
  box-shadow: 0rem 1rem 6rem 1rem rgba(0, 0, 0, 0.2);
  width: 50%;
  border-radius: 1rem;
  align-self: center;
  margin: 10rem 0;
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 1.6rem;
`;

const Input = styled.input`
  width: 50%;
  height: 2rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-size: 1.6rem;
  border: ${(props) => props.names && "1px solid #897DE1"};

  &:focus {
    outline: 1px solid #897de1;
  }
`;

const Desc = styled.textarea`
  width: 50%;
  height: 5rem;
  padding: 0.5rem;
  font-size: 16px;
  border: 1px solid #897de1;

  &:focus {
    outline: 1px solid #897de1;
  }
`;

const Button = styled.button`
  color: white;
  background: #897de1;
  padding: 0.7rem;
  border: none;
  border-radius: 0.7rem;
  font-size: 1.6rem;
  cursor: pointer;
  align-self: flex-end;
`;

const Note = styled.span`
  color: gray;
  font-size: 10px;
`;
const Order = () => {
  return (
    <Container>
      <Navbar navcolor="897DE1" />
      <Wrapper>
        <InputContainer>
          <Label>
            Name <Note>optional</Note>
          </Label>
          <Input names={true} type="text" placeholder="name if you have one" />
        </InputContainer>
        <InputContainer>
          <Label>Discription</Label>
          <Desc />
        </InputContainer>
        <InputContainer>
          <Label>Image</Label>
          <Input type="file" placeholder="image of cloth" />
        </InputContainer>
        <Button>Create</Button>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Order;

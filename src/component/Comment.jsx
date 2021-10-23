import React from "react";
import styled from "styled-components";
import CommentStory from "./CommentStory";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem 0;
`;
const Title = styled.h3`
  font-size: 3rem;
  font-weight: 300;
  text-align: center;
  margin-bottom: 2rem;
`;

const InputPage = styled.div`
  display: flex;
  width: 60%;
  margin: 2rem;
  align-self: center;
`;
const Input = styled.input`
  flex: 4;
  height: 2rem;
  padding: 0.5rem;
  font-size: 1.6rem;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  color: white;
  background-color: #897de1;
  margin-left: 1rem;
`;

const Comment = () => {
  return (
    <Container>
      <Title>Customer Review</Title>
      <CommentStory />
      <CommentStory />
      <CommentStory />

      <InputPage>
        <Input type="text" placeholder="your review is appreciated" />
        <Button>add</Button>
      </InputPage>
    </Container>
  );
};

export default Comment;

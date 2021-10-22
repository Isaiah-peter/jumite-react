import React from "react";
import styled from "styled-components";
import CommentStory from "./CommentStory";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Title = styled.h3`
  font-size: 3rem;
  font-weight: 300;
`;

const InputPage = styled.div``;
const Input = styled.textarea``;
const Button = styled.button``;

const Comment = () => {
  return (
    <Container>
      <Title>Customer Review</Title>
      <CommentStory />
      <CommentStory />
      <CommentStory />

      <InputPage>
        <Input />
        <Button>add</Button>
      </InputPage>
    </Container>
  );
};

export default Comment;

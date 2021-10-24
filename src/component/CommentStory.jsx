import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 30%;
  margin: 0 auto;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.2);
  background-color: rgba(225, 225, 225, 0.16);
  border-radius: 0.3rem;
  padding: 6rem;
  padding-left: 9rem;
  font-size: 1.6rem;
  transform: skewX(-12deg);
  margin-bottom: 2rem;
`;

const Story = styled.div`
  transform: skewX(12deg);
`;
const Comments = styled.p``;
const CustomerName = styled.h1`
  text-align: end;
  font-size: 1.6rem;
  font-weight: 200;
  font-family: cursive;
  text-transform: uppercase;
`;

const CommentStory = () => {
  return (
    <Container>
      <Story>
        <Comments>Lorem ipsum</Comments>
      </Story>
      <CustomerName>Isaiah</CustomerName>
    </Container>
  );
};

export default CommentStory;

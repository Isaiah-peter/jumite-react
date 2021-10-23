import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 65%;
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
const Title = styled.h3`
  margin-bottom: 1.5rem;
  font-size: 1.6rem;
  font-weight: 400;
  text-transform: uppercase;
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
        <Title>Nice Work</Title>
        <Comments>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
          architecto, unde mollitia consectetur, blanditiis assumenda quos ipsum
          eaque voluptas dolorum iusto.
        </Comments>
      </Story>
      <CustomerName>Isaiah</CustomerName>
    </Container>
  );
};

export default CommentStory;

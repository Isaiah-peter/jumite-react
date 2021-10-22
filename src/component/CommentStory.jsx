import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.2);
  background-color: rgba(225, 225, 225, 0.16);
  border-radius: 0.3rem;
  padding: 6rem;
  padding-left: 9rem;
  font-size: 1.6rem;
  transform: skewX(-12deg);
`;

const Figure = styled.figure`
  width: 15rem;
  height: 15rem;
  float: left;
  -webkit-shape-outside: circle(50% at 50% 50%);
  shape-outside: circle(50% at 50% 50%);
  -webkit-clip-path: circle(50% at 50% 50%);
  clip-path: circle(50% at 50% 50%);
  transform: translateX(-3rem) skewX(12deg);
  position: relative;
`;
const Image = styled.img`
  height: 100%;
  transform: translateX(-4rem) scale(1.4);
  transition: all 0.2s;
  object-fit: cover;
`;
const FigureCaption = styled.figcaption`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, 20%);
  font-size: 1.7rem;
  color: $color-white;
  text-transform: uppercase;
  text-align: center;
  opacity: 0;
  backface-visibility: hidden;
  transition: all 0.5s;
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

const CommentStory = () => {
  return (
    <Container>
      <Figure>
        <Image />
        <FigureCaption>jack willson</FigureCaption>
      </Figure>
      <Story>
        <Title>Nice Work</Title>
        <Comments>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
          architecto, unde mollitia consectetur, blanditiis assumenda quos ipsum
          eaque voluptas dolorum iusto.
        </Comments>
      </Story>
    </Container>
  );
};

export default CommentStory;

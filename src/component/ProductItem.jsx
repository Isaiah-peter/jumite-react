import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 30%;
  height: 400px;
  margin: 10px;
  box-shadow: 0 2px 8px 2px rgba(0, 0, 0, 0.4);
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const CustomerName = styled.h1`
  color: #897de1;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  font-family: cursive;
  z-index: 20;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProductItem = ({ img }) => {
  return (
    <Container>
      <Wrapper>
        <Image src={img.img} alt={img.img} />
        <CustomerName>Isaiah</CustomerName>
      </Wrapper>
    </Container>
  );
};

export default ProductItem;

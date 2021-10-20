import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 30%;
  height: 70px;
  margin-right: 10px;
  box-shadow: 0 2px 8px 2px rgba(0, 0, 0, 0.4);
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
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
      </Wrapper>
    </Container>
  );
};

export default ProductItem;

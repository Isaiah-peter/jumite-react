import React from "react";
import styled from "styled-components";
import ProductItem from "./ProductItem";
import { data } from "../data";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
`;
const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-weight: 300;
  margin: 20px 0;
`;

const Products = () => {
  return (
    <Container>
      <Title> Our Product </Title>
      <Wrapper>
        {data.map((d) => {
          return <ProductItem key={d.id} img={d} />;
        })}
      </Wrapper>
    </Container>
  );
};

export default Products;

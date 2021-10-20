import React from "react";
import styled from "styled-components";
import ProductItem from "./ProductItem";
import { data } from "../data";

const Container = styled.div`
  padding: 20px;
  color: black;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Products = () => {
  return (
    <Container>
      <Wrapper>
        {data.map((d) => {
          return <ProductItem key={d.id} img={d} />;
        })}
      </Wrapper>
    </Container>
  );
};

export default Products;

import React from "react";
import styled from "styled-components";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;

const Order = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper></Wrapper>
      <Footer />
    </Container>
  );
};

export default Order;

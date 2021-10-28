import React from "react";
import styled from "styled-components";
import Navbar from "../component/Navbar";

const Container = styled.div``;
const Wrapper = styled.div`
  margin-top: 7rem;
  display: flex;
`;

const Orders = styled.div`
  flex: 1;
  border-right: 1px solid #897de1;
  height: calc(100vh - 7rem);
  overflow-y: scroll;
`;
const Messagepage = styled.div`
  flex: 4;
  height: calc(100vh - 7rem);
`;

const GetListOfOrder = () => {
  return (
    <Container>
      <Navbar navcolor="897DE1" />
      <Wrapper>
        <Orders></Orders>
        <Messagepage></Messagepage>
      </Wrapper>
    </Container>
  );
};

export default GetListOfOrder;

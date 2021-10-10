import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const Name = styled.h1`
  font-weight: 400;
  text-transform: uppercase;
  color: white;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  padding: 5px 10px;
  font-size: 16px;
  margin-left: 20px;
  border: ${(props) => props.typed === "filled" && "none"};
  color: ${(props) => props.typed === "filled" && "white"};
  background: ${(props) => props.typed === "filled" && "black"};
  cursor: pointer;
  padding: ${(props) => props.typed === "filled" && "8px"};
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Icon src="https://i.ibb.co/dKZLnQ9/Badge-1.png" alt="app icon" />
          <Name>Jumite</Name>
        </Left>
        <Right>
          <Button>Orders</Button>
          <Button typed="filled">Create Order</Button>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

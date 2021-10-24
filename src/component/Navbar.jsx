import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 50px;
  width: 100%;
  background: #${(props) => props.scroll === true && "897DE1"};
  background-color: #${(props) => props.nav === "897DE1" && "897DE1"};
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px 0;
  z-index: 100;
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

const Navbar = ({ navcolor }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <Container nav={navcolor} scroll={isScrolled}>
      <Wrapper>
        <Left>
          <Icon src="https://i.ibb.co/dKZLnQ9/Badge-1.png" alt="app icon" />
          <Name>Jumite</Name>
        </Left>
        <Right>
          <Button>Orders</Button>
          <Link className="link" to="/create-order">
            <Button typed="filled">Create Order</Button>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

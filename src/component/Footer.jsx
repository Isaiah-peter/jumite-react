import React from "react";
import styled from "styled-components";
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  background: #3b464b;
  color: white;
  width: 100%;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  font-weight: 400;
  text-transform: uppercase;
`;

const Description = styled.p`
  margin: 20px 0px;
`;

const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #${(props) => props.color};
  margin-right: 20px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Jumite</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore
          obcaecati ducimus fuga ipsa enim explicabo? Dicta officia, id debitis
        </Description>
        <SocialMediaContainer>
          <SocialIcon color="3b5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55acee">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="e60023">
            <Pinterest />
          </SocialIcon>
        </SocialMediaContainer>
      </Left>
      <Center>
        <Title>Useful links</Title>
        <List>
          <ListItem>
            <Link className="link" to="/">
              Home
            </Link>
          </ListItem>

          <ListItem>
            <Link className="link" to="/">
              Ordered
            </Link>
          </ListItem>

          <ListItem>
            <Link className="link" to="/create-order">
              Order
            </Link>
          </ListItem>

          <ListItem>
            <Link className="link" to="/">
              Term
            </Link>
          </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> No.33 Arikenbe street
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> 08134684624
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> peterisaiah@gmail.com
        </ContactItem>
        <ContactItem>Payment : Account number</ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;

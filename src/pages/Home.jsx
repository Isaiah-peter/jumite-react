import React from "react";
import styled from "styled-components";
import Navbar from "../component/Navbar";
import MainScreen from "../component/MainScreen";

const Container = styled.div``;

const Home = () => {
  return (
    <Container>
      <Navbar />
      <MainScreen />
    </Container>
  );
};

export default Home;

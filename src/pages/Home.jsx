import React from "react";
import styled from "styled-components";
import Navbar from "../component/Navbar";
import MainScreen from "../component/MainScreen";
import Products from "../component/Products";
import Footer from "../component/Footer";
import Comment from "../component/Comment";

const Container = styled.div``;

const Home = () => {
  return (
    <Container>
      <Navbar />
      <MainScreen />
      <Products />
      <Comment />
      <Footer />
    </Container>
  );
};

export default Home;

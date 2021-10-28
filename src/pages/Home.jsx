import React from "react";
import styled from "styled-components";
import Navbar from "../component/Navbar";
import MainScreen from "../component/MainScreen";
import Products from "../component/Products";
import Footer from "../component/Footer";
import Comment from "../component/Comment";
import OfferPage from "../component/OfferPage";

const Container = styled.div``;

const Home = () => {
  return (
    <Container>
      <Navbar />
      <MainScreen />
      <Products />
      <OfferPage />
      <Comment />
      <Footer />
    </Container>
  );
};

export default Home;

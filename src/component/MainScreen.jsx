import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("https://i.ibb.co/jVdbbqv/jumiteapparel.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const Info = styled.div`
  flex: 4;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InfoWrapper = styled.div``;

const Title = styled.h1`
  color: #fff;
  font-weight: 500;
  font-size: 40px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 20px;
  background-color: #4c4568;
  border: none;
  margin-top: 20px;
  color: white;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 16px;
`;

const Image = styled.div`
  flex: 3;
  width: 100%;
  height: 100%;
  background: url("https://i.ibb.co/rpzbdt4/DSC-6678-50-170-removebg-preview.png");
  background-repeat: no-repeat;
`;

const MainScreen = () => {
  return (
    <Container>
      <Wrapper>
        <Info>
          <InfoWrapper>
            <Title>
              <span style={{ background: "white", color: "#8678D7" }}>
                Jumite's
              </span>{" "}
              Appeal
            </Title>
            <Button>Order now</Button>
          </InfoWrapper>
        </Info>
        <Image />
      </Wrapper>
    </Container>
  );
};

export default MainScreen;

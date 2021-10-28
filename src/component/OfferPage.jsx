import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: 300;
  font-size: 3rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

const Discriptions = styled.p`
  font-weight: 400;
  text-align: center;
  font-size: 1.6rem;
  width: 50%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const InfoContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 5%;
  margin-top: 2rem;
`;
const Image = styled.img`
  object-fit: cover;
  width: 40rem;
  height: 40rem;
  margin-bottom: 1rem;
  -webkit-clip-path: polygon(
    13% 13%,
    30% 13%,
    37% 0%,
    50% 8%,
    62% 0%,
    70% 13%,
    87% 13%,
    87% 30%,
    100% 37%,
    92% 50%,
    100% 62%,
    87% 70%,
    87% 87%,
    70% 87%,
    62% 100%,
    50% 92%,
    37% 100%,
    30% 87%,
    13% 87%,
    13% 70%,
    0% 62%,
    8% 50%,
    0% 37%,
    13% 30%
  );
  clip-path: polygon(
    13% 13%,
    30% 13%,
    37% 0%,
    50% 8%,
    62% 0%,
    70% 13%,
    87% 13%,
    87% 30%,
    100% 37%,
    92% 50%,
    100% 62%,
    87% 70%,
    87% 87%,
    70% 87%,
    62% 100%,
    50% 92%,
    37% 100%,
    30% 87%,
    13% 87%,
    13% 70%,
    0% 62%,
    8% 50%,
    0% 37%,
    13% 30%
  );

  border-radius: 50%;
`;

const Hr = styled.hr`
  border: 0.05rem solid #897de1;
  width: 10%;
  margin: 1rem 0;
`;

const InfoService = styled.h2`
  font-size: 2rem;
`;

const OfferPage = () => {
  return (
    <Container>
      <Title>What we offer</Title>
      <Discriptions>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos,
        provident adipisci repudiandae consectetur ipsum aperiam corrupti dicta
        temporibus, numquam sint molestias amet e
      </Discriptions>
      <Wrapper>
        <InfoContainer>
          <Image src="https://i.ibb.co/thbXFyC/IMG-20210425-WA0005.jpg" />
          <Hr />
          <InfoService>Female Native</InfoService>
        </InfoContainer>

        <InfoContainer>
          <Image src="https://i.ibb.co/thbXFyC/IMG-20210425-WA0005.jpg" />
          <Hr />
          <InfoService>Female already made</InfoService>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default OfferPage;

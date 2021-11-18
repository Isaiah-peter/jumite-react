import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #8577d6;
`;
const Wrapper = styled.div`
  width: 30%;
  display: block;
`;
const InputContainer = styled.div`
  margin: 1rem;
  padding: 0 2rem;
`;
const Input = styled.input`
  width: 100%;
  padding: 1rem 2rem;
  font-size: 16px;
`;
const Label = styled.label`
  font-size: 12px;
  font-weight: 300;
  margin-bottom: 1rem;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <InputContainer>
          <Label>Email</Label>
          <Input type="email" placeholder="email" />
        </InputContainer>
        <InputContainer>
          <Label>Password</Label>
          <Input type="password" placeholder="password" />
        </InputContainer>
      </Wrapper>
    </Container>
  );
};

export default Login;

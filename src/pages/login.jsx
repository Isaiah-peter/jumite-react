import React from "react";
import styled from "styled-components";

const Container = styled.div`
  color: red;
`;
const Wrapper = styled.div``;
const InputContainer = styled.div``;
const Input = styled.input``;
const Label = styled.label``;

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

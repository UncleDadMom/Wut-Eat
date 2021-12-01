import React from "react";
import styled from "styled-components";
import Input from "../styles/Input";

function PasswordBox({password, setPassword}) {
  return (
    <Container>
        <PasswordLabel>Password</PasswordLabel>
        <Input 
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        ></Input>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const PasswordLabel = styled.label`
  font-family: Roboto;
  font-size: 16px;
  text-align: left;
  color: rgba(16,15,15,1);
  font-style: normal;
  font-weight: 700;
  width: 77px;
  height: 30px;
  border: none;
  background: transparent;
`;



export default PasswordBox;

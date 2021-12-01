import React from "react";
import styled from "styled-components";
import Input from "../styles/Input";

function UsernameBox({username, setUsername}) {
  return (
    <Container >
      <UsernameLabel>Username</UsernameLabel>
      <Input
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        ></Input>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const UsernameLabel = styled.label`
  font-family: Roboto;
  font-size: 16px;
  text-align: left;
  color: rgba(16,15,15,1);
  width: 91px;
  height: 30px;
  font-style: normal;
  font-weight: 700;
  border: none;
  background: transparent;
`;

export default UsernameBox;

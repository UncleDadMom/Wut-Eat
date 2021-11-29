import React from "react";
import styled from "styled-components";

function UsernameBox({username, setUsername}) {
  return (
    <Container >
      <UsernameLabel>Username</UsernameLabel>
      <UsernameInput
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        ></UsernameInput>
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

const UsernameInput = styled.input`
  font-family: Roboto;
  color: #000;
  font-size: 14px;
  flex: 1 1 0%;
  line-height: 16px;
  height: 29px;
  font-style: italic;
  font-weight: ;
  opacity: 0.6;
  border-width: 1px;
  border-color: #000000;
  background-color: rgba(230, 230, 230,1);
  margin-top: 1px;
  border-style: solid;
  background: transparent;
  display: flex;
  flex-direction: column;
`;

export default UsernameBox;

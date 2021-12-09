import React from "react";
import styled from "styled-components";
import Input from "../styles/Input";
import Label from "../styles/Label";

function UsernameBox({username, setUsername}) {
  return (
    <Container >
      <Label>Username</Label>
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

export default UsernameBox;

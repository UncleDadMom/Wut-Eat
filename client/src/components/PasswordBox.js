import React from "react";
import styled from "styled-components";
import Input from "../styles/Input";
import Label from "../styles/Label";

function PasswordBox({password, setPassword}) {
  return (
    <Container>
        <Label>Password</Label>
        <Input 
        type="password"
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


export default PasswordBox;

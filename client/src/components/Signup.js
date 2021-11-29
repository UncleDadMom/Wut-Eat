import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"
import UsernameBox from "./UsernameBox";
import PasswordBox from "./PasswordBox";
import ConfirmPassword from "./ConfirmPassword";

export default function Signup({setUser, username, setUsername, password, setPassword}){
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    let navigate = useNavigate();

    function handleSubmit(e) {
      e.preventDefault();
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          password_confirmation: passwordConfirmation,
        }),
      })
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
          navigate("/")
        } else {
            r.json().then(error => alert(error.errors));
        }
      });
    }

    return(
        <>
            <CreateANewUser>Create a New User</CreateANewUser>
        <Container>
            <SignupForm onSubmit={handleSubmit}>
                <UsernameBox username={username} setUsername={setUsername}
                    style={{
                    width: 375,
                    height: 60,
                    marginTop: 15
                    }}>
                </UsernameBox>
                <PasswordBox password={password} setPassword={setPassword}
                    style={{
                    width: 375,
                    height: 60,
                    overflow: "visible",
                    marginTop: 5,
                    alignSelf: "center"
                    }}>
                </PasswordBox>
                <ConfirmPassword passwordConfirmation={passwordConfirmation} setPasswordConfirmation={setPasswordConfirmation}
                    style={{
                    height: 60,
                    width: 375,
                    marginTop: 4
                    }}>
                </ConfirmPassword>
                <Button type="submit">Sign Up</Button>
            </SignupForm>
        </Container>
        </>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const CreateANewUser = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 36px;
  
`;

const SignupForm = styled.form`
  height: 200px;
  background-color: rgba(188,55,55,1);
  border-width: 1px;
  border-color: rgba(0,0,0,1);
  width: 375px;
  flex-direction: column;
  display: flex;
  align-self: center;
  border-style: solid;
`;
const Button = styled.button`
  width: 112px;
  height: 25px;
  background-color: #E6E6E6;
  flex-direction: column;
  display: flex;
  margin-left: 258px;
  border: none;
`;
import React from "react";
import styled from "styled-components";
import UsernameBox from "./UsernameBox";
import PasswordBox from "./PasswordBox.js";
import { useNavigate } from "react-router-dom";

function Login({setUser, username, setUsername, password, setPassword}) {

    let navigate = useNavigate();

    function login(e) {
        e.preventDefault();
        fetch("/login", {
          method: "POST", //creating session
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((user) => setUser(user));
            navigate("/")
          } else {alert("Invalid username or password")}

        });
      }

  return (
    <Container>
      <LoginForm onSubmit={login}>
        <UsernameBox username={username} setUsername={setUsername}
          inputStyle="Input"
          textInput="Username"
          style={{
            height: 60,
            width: 364,
            marginLeft: 6
          }}
          Username="Username"
        ></UsernameBox>
        <PasswordBox password={password} setPassword={setPassword}
          style={{
            height: 60,
            width: 364,
            marginTop: 5,
            marginLeft: 6
          }}
        ></PasswordBox>
        <Button type="submit">Login</Button>
      </LoginForm>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LoginForm = styled.form`
  height: 150px;
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


export default Login;

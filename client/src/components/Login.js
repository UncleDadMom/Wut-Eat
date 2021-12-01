import React from "react";
import styled from "styled-components";
import UsernameBox from "./UsernameBox";
import PasswordBox from "./PasswordBox.js";
import { useNavigate } from "react-router-dom";
import Button from "../styles/Button"
import { Link } from "react-router-dom";
import ButtonContainer from "./ButtonContainer";


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
    <>
      <LoginForm onSubmit={login}>
        <UsernameBox username={username} setUsername={setUsername}
          inputStyle="Input"
          textInput="Username"
          style={{
            height: 60,
            width: 364,
            marginLeft: 6
          }}
        ></UsernameBox>
        <PasswordBox password={password} setPassword={setPassword}
          style={{
            height: 60,
            width: 364,
            marginTop: 5,
            marginLeft: 6
          }}
        ></PasswordBox>
        <ButtonContainer>
          <Link to="/signup"><Button type="button">New User</Button></Link>
          <Button type="submit">Login</Button>
        </ButtonContainer>
      </LoginForm>
    </>
  );
}

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


export default Login;

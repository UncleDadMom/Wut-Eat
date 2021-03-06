import React, { useEffect, useState } from "react";
import Login from './components/Login'
import Home from './components/Home'
import { Routes, Route } from "react-router-dom";
import Signup from './components/Signup'
import Group from './components/Group'
import Header from "./styles/Header";
import History from "./components/History";

function App() {
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  useEffect(() => {
    // auto-login if session[:user_id]
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  if (!user) return(
    <>
      <Header>Please login or signup!</Header>
      <Routes>
        <Route path="/" element={<Login
          username={username}
          setUsername={setUsername}
          setUser={setUser}
          password={password}
          setPassword={setPassword}/>}/>
         <Route path="/signup" element={<Signup 
          username={username}
          setUsername={setUsername}
          setUser={setUser}
          password={password}
          setPassword={setPassword}/>}/>
      </Routes>
    </>
  )

  return (
    <>
      <Routes>
        <Route path="/" element={<Home user={user} setUser={setUser}/>}/>
        <Route path="/group" element={<Group user={user}/>}/>
        <Route path="/history" element={<History/>}/>
      </Routes>
    </>
  );
}

export default App;

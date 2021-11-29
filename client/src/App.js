import React, { useEffect, useState } from "react";
import Login from './components/Login'
import Home from './components/Home'
import { Routes, Route } from "react-router-dom";
import Signup from './components/Signup'
import Group from './components/Group'
import Unauthorized from "./components/Unauthorized";
import Header from "./components/Header";

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

  return (
    <main>
      <Header/>
      <Routes>
        <Route path="/" element={<Home user={user} setUser={setUser}/>}/>
        <Route path="/login" element={<Login 
          username={username}
          setUsername={setUsername}
          setUser={setUser}
          password={password}
          setPassword={setPassword}/>}>
          </Route>
        <Route path="/signup" element={<Signup 
          username={username}
          setUsername={setUsername}
          setUser={setUser}
          password={password}
          setPassword={setPassword}/>}/>
        <Route path="/group" element={user ? <Group user={user}/>: <Unauthorized/>}/>
      </Routes>
    </main>
  );
}

export default App;

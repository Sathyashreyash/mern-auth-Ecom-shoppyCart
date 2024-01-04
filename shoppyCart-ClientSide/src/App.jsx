import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { About } from "./pages/About";
import { SingIn } from "./pages/SingIn";
import { SingUp } from "./pages/SingUp";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="signin" element={<SingIn />}></Route>
        <Route path="signup" element={<SingUp />}></Route>
        <Route path="profile" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

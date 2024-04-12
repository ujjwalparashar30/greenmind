import React from "react";
import Login from "./login";
import {Routes,Route,Navigate} from 'react-router-dom';
import Dashboard from "./dashboard";
import Home from "./home";




export default function App() {
  return (
    <Routes>
      <Route element={<Navigate to="/login" />} path="/" />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    
  
    
  )
}


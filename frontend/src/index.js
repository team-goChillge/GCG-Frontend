import React from "react";
import ReactDOM from "react-dom/client";  // ✅ react-dom에서 가져오기
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login"; 
import Sign from "./pages/signup"; 

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ root 가져오기
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Sign />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

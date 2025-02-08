import React from "react";
import ReactDOM from "react-dom/client";  // ✅ react-dom에서 가져오기
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login"; 
import Sign from "./pages/signup"; 
import Share from "./pages/Share"; 
import Notice from "./pages/notice"; 
import NoticeW from "./pages/noticewrtie"; 
import Suggest from "./pages/suggest"; 

import Mange from "./pages/mange"; 
import Board from "./pages/board"; 

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ root 가져오기
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Sign />} />
        <Route path="/share" element={<Share />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/noticewrite" element={<NoticeW />} />
        <Route path="/mange" element={<Mange />} />
        <Route path="/board" element={<Board />} />
        <Route path="/suggest" element={<Suggest />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

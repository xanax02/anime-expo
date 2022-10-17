import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Explore from "./components/Explore";
import AddEvent from "./components/AddEvent";
import "./App.css";
import EventDetailPage from "./components/EventDetailPage";
import EditPage from "./components/EditPage";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/:params" element={<EventDetailPage />} />
        <Route path="/edit/:params" element={<EditPage />} />
        <Route path="/add-event" element={<AddEvent />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

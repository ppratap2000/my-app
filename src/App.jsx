import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import { BrowserRouter, Route, Routes } from 'react-router-dom';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route index element={<Home />} /> */}

        <Route path="/header" element={<Header />} />
        <Route path="/checkout" element={<Checkout />} />

        {/* <Route path="contact" element={<Contact />} /> */}
        {/* <Route path="*" element={<NoPage />} /> */}


      </Routes>
    </BrowserRouter>
  );
}

export default App;

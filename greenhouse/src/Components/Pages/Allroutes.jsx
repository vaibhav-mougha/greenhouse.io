import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../NavPages/About";
import Community from "../NavPages/Community";
import Home from "../NavPages/Home";
import Mainsigninpage from "../NavPages/Mainsigninpage";
import Product from "../NavPages/Product";
import Resources from "../NavPages/Resources";
import SigninPage from "../NavPages/SigninPage";

const Allroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />
        <Route path="/community" element={<Community />} />
        <Route path="/signin" element={<Mainsigninpage />} />
        <Route path="/requestademo" element={<SigninPage />} />
        <Route path="/search" element={<SigninPage />}  />
      </Routes>
    </>
  );
};

export default Allroutes;

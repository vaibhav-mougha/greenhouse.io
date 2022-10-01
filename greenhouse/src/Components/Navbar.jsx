import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
// import searchlogo from "./Asset/";

const Navbar = () => {
  return (
    <div className="outer-div">
      <div className="inner-left">
        <NavLink to="/">
          <div className="leftfirst productSolution">
            <img src="https://www.greenhouse.io/assets/svg/logo.svg" alt="" />
          </div>
        </NavLink>
        <div className="leftsecond">
          <NavLink to="/product" style={{ textDecoration: "none" }}>
            <h5>Products&Solution</h5>
          </NavLink>
          {/* <div className="mega-box">
            <div className="content">
              <div className="row">
                <ul className="mega-links">
                  <h1>Mission</h1>
                  <h1>Belonging</h1>
                  <h1>Company</h1>
                  <h1>Carrers</h1>
                  <h1>Press & Awards</h1>
                  <h1>Contact</h1>
                </ul>
              </div>
              <div className="row">
                <img
                  src="https://sharp.services.greenhouse.io/production/Greenhouse-Pride-tshirt-n.jpg?auto=format&fit=max&lossless=true&q=90&w=426&s=de44e24806b388901684135be6acb800917d827f4b3424eade2f1300c44d2177"
                  alt=""
                />
              </div>
              <div className="row">
                <header>Greenhouse Celebrates Prides </header>
                <h4>Buy a shirt, help an LGBTQ+ teen</h4>
                <p style={{ marginTop: "0px" }}>
                  We’re shining a spotlight on the LGBTQ+ community with our new
                  Pride t-shirt. 100% of the proceeds are going to support The
                  Trevor Project and the Ali Forney Center.
                </p>
                <button className="btn-nav-2">Get your pride shirt</button>
              </div>
              <div className="row"></div>
            </div>
          </div> */}
        </div>
        <div className="leftthird">
          <NavLink to="/resources" style={{ textDecoration: "none" }}>
            <h5>Resources</h5>
          </NavLink>
        </div>
        <div className="leftfourth">
          <NavLink to="/about" style={{ textDecoration: "none" }}>
            <h5>About us</h5>
          </NavLink>
        </div>
        <div className="leftfifth">
          <NavLink to="/community" style={{ textDecoration: "none" }}>
            <h5>Community</h5>
          </NavLink>
        </div>
      </div>
      <div className="inner-right">
        <div className="rightfirst"></div>
        <div className="rightsecond">
          <button className="nav-btn-1">
            <NavLink to="/signin" style={{ textDecoration: "none" }}>
              <h5>Sigin</h5>
            </NavLink>
          </button>
          <button className="nav-btn-2">
            <NavLink to="/requestademo" style={{ textDecoration: "none" }}>
              <h5>Request a demo</h5>
            </NavLink>
          </button>
          <NavLink to="/search" style={{ textDecoration: "none" }}>
            <img
              className="search-logo"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAABdCAMAAADwr5rxAAAAYFBMVEX///8AAADi4uLn5+fDw8P7+/vd3d1JSUlQUFD4+Ph0dHSoqKikpKSenp4pKSnS0tJfX1/t7e1ZWVm6urp/f38wMDCurq5lZWUgICCHh4eUlJSOjo4KCgo7OzsVFRXLy8t+DcqVAAABKElEQVRoge2WyXKDMBBENWK1sB2EMZjEDv//lx7ASQjiRDU5pPqdYA6vmhktGEMIIYQQQgj5dxzik2vr4m0Pd+Tkxe0Il59kxhmcvxykXRz5tBkfL2j5+9eLrbD6oS3zZnT6HqHk0UJuTC2So+xu1pYXZ5EUI080+rJ2EXEYe6+rJSiKXBOI/SgSB8UWNVcdoV0rYhrv1mJ+LJfRVlZFbu2DttCIFEExk7uH2FORbFnzK7WNXMMJ6lBR53ATBNXPkQPIbh6LnenvuOhTVPezNVOVSwuzm1h1n83Ui6ieLiigvh+Flavd4/v+K3F6X87u1aJCpze2G2Pf8kYnkKPTK95aOzU/yeDpfzGlD48IEGN60AUVkgzp+73s+iPidpQTQgghhBBC/pwnQwsIQd8Sf4UAAAAASUVORK5CYII="
              alt="Search"
            />
          </NavLink>
        </div>
        <div className="rightthird"></div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import style from "./Mainsign.module.css";
import { Link } from "react-router-dom";

const Mainsigninpage = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.left}>
          <img
            src="https://sharp.services.greenhouse.io/production/Greenhouse-recruiting-sourcing-automation-product-image_2022-05-17-232750_opev.png?auto=format&fit=max&lossless=true&q=90&w=1440&s=8de0803263cf246ee4e269eedd59a856d4491384ebb4f73c1045a19a9c4ce6b7"
            alt=""
            style={{ width: "750px", height: "100vh" }}
          />
        </div>
        <div className={style.right}>
          <h5>Email</h5>
          <input required type="email" />
          <h5>Password</h5>
          <input  type="password" />
          <br />
            <Link to="/">
          <button >Signin</button>
            </Link>
        </div>
      </div>
    </>
  );
};

export default Mainsigninpage;

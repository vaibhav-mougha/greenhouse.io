import React from "react";
import "../Pages/Page2.css";

const Page2 = () => {
  return (
    <div className="main-div">
      <div className="left-box">
        <div className="inside">
          <p>Greenhouse Blog</p>
          <h1>Find out what’s next in hiring</h1>
          <p>
            Get the latest news, practitioner stories, hiring best practice in
            action and more on the Greenhouse blog.
          </p>
        </div>
      </div>
      <div className="right-box">
        <img
          src="https://sharp.services.greenhouse.io/production/two-men-in-a-meeting.jpg?auto=format&fit=max&lossless=true&q=90&w=1440&s=1498f099543519b89aec0f97dc6c0776f33bb5b2513ce615b996b28af54aef94"
          alt=""
        />
      </div>
    </div>
  );
};

export default Page2;

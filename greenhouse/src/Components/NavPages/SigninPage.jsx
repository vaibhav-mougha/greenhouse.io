import React from "react";
import styles from "./Signinpage.module.css";
import { Link } from "react-router-dom";

const SigninPage = () => {
  return (
    <>
      {/* <h1>Sigin Page</h1> */}

      <div className={styles.container}>
        <div className={styles.first}>
          <div>
            <h1>Discover what’s new in Greenhouse</h1>

            <p>
              We’re constantly innovating and adding new features to help you
              get better at hiring. Make the most of your Greenhouse by
              unlocking new features and strengthening your abilities in
              reporting, structured hiring and more.
            </p>

            <h1>Looking for help?</h1>

            <p>
              You can access our support center at any time to get answers to
              your questions, find how-to information or to get in touch with
              our Support Team.
            </p>
          </div>
        </div>
        <div className={styles.second}>
          <div className="form">
            <h6>Working Email Addres</h6>
            <input type="text" placeholder="Email Address..." required />
            <br />
            <h6>First Name</h6>
            <input type="text" placeholder="First Name..." required />
            <br />
            <h6>Last Name</h6>
            <input type="text" placeholder="Last Name" required />
            <br />
            <h6>Company Name</h6>
            <input type="text" placeholder="Company Name" required />
            <br />
            <h6>Company Size</h6>
            <input type="number" placeholder="company size" required />
            <br />
            <Link to="/signin">
              <button>Get in touch</button>
            </Link>
          </div>
        </div>
        <div className={styles.third}>
          <img
            className="image"
            src="https://sharp.services.greenhouse.io/production/Austin-Galoob-2.jpg?auto=format&fit=max&lossless=true&q=90&w=1440&s=0acefa7053f3b17f4a4b72253d69ef4b6840c9d7316c30c3ffed6be0c4b7d690"
            alt=""
          />
        </div>
        <div className={styles.fourth}>
          <div>
            <h1>
              "We made the case for Greenhouse because we needed the ability to
              access more reporting and streamline processes. Only Greenhouse
              could have helped us do that.""
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default SigninPage;

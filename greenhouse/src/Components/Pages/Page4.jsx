import styles from "./Page4.module.css";

import React from "react";

const Page4 = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <p>About Greenhouse</p>
          <h1>We’re the hiring operating system for people-first companies</h1>
          <h6>
            Greenhouse is the leading hiring worktech company. Tomorrow’s
            winning organizations are the ones that view their approach to
            talent as strategic, not administrative. We help people-first
            companies hire for what’s next by powering their system for hiring
            great talent.
          </h6>
        </div>
        <div className={styles.right}>
          <img
            src="https://sharp.services.greenhouse.io/production/About-us-company-hero-image-new.png?auto=format&fit=max&lossless=true&q=90&w=1440&s=40caf695139edf0ae07c6358e7b752748f77ace6798d4f71491abb20ee50df6a"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Page4;


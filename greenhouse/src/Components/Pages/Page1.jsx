import React from "react";
import  P1 from "../Pages/Page1.module.css";


const Page1 = () => {
  return (
    <>
       {/* <h1  className={css.abc}>Body 1</h1> */}
      <div className={P1.container}>
        <div className={P1.first}>
          <p>Introducing Sourcing Automation</p>
          <h1>An efficient, personalized way to engage with talent</h1>
          <h4>
            Sourcing Automation helps you find, reach and engage top talent
            quickly and effectively. Easily capture your prospects' contact
            information, personalize and scale your outreach and automate
            communication – all with Greenhouse.
          </h4>
          <button>See how it works</button>
        </div>
        <div className={P1.second}>
          <img
            src="https://sharp.services.greenhouse.io/production/Greenhouse-homepage-sourcing-automation-product-image.png?auto=format&fit=max&lossless=true&q=90&w=1440&s=7754fb1603c84e31364b61f5f19ee99fb18b12d2ec5fe3c3ede07d566b8a438c"
            alt=""
          />
        </div>
        <div className={P1.third}>
          <img
            src="https://sharp.services.greenhouse.io/production/Example-courses-from-Learn-Greenhouse-3.png?auto=format&fit=max&lossless=true&q=90&w=1440&s=4b38236433fd0ec2ec499990c68c8d389bada59b72deee4aa999aa0feb207445"
            alt=""
          />
        </div>
        <div className={P1.fourth}>
          <h1>Learning Greenhouse is easier than ever</h1>
          <p>
            Train your team on Greenhouse and explore recruiting best practices
            with on-demand videos and courses. This resource library also
            highlights core workflow paths for recruiters, coordinators, hiring
            managers and interviewers.
          </p>
          <button>Start Learning</button>
        </div>
      </div>
    </>
  );
};

export default Page1;

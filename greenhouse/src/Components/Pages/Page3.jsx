import React from "react";
import  P3 from "../Pages/Page3.module.css";
const Page3 = () => {
  return (
    <>
      {/* <h2>Page 3</h2> */}

      <div className={P3.container}>
        <div className={P3.left}>
          <div>

        

          <h1>Share your Greenhouse experience</h1>
          <h7>
            Has Greenhouse helped transform your hiring practices? Let fellow
            business leaders and talent pros know! Because when every company is
            good at hiring, every person's potential can be unlocked at work.
            Add your review
          </h7>
          <button className={P3.btn}>Review</button>
          </div>
        </div>
        <div className={P3.right}>

        <img className="image"
          src="https://sharp.services.greenhouse.io/production/Photo-of-brunette-woman-in-a-gray-vest-2.png?auto=format&fit=max&lossless=true&q=90&w=1440&s=e9d7003d6a3dd294708213002ecf8fec644dcf0db4aabef51fb388eea936a485"
          alt=""
        />
        </div>
      </div>
    </>
  );
};

export default Page3;

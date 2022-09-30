import React from "react";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <>
      {/* <h1>Footer Page </h1> */}
      <footer className={style.footer}>
        <div className={style.sec1}>
          <div className={style.left}>
            <div>
              <p>Products</p>
              <a href="recuriting.html">Recruiting</a>
              <br />
              <a href="">Onboarding</a>
              <br />
              <a href="">Pricing</a>
            </div>
            <div>
              <p>Segments</p>
              <a href="">Enterprise</a>
              <br />
              <a href="">Small to midsize</a>
            </div>
            <div>
              <p>Solutions</p>
              <a href="">Integrations</a>
              <br />
              <a href="">Structured hiring</a>
              <br />
              <a href="">Candidate experience</a>
              <br />
              <a href="">Diversity</a>
              <br />
              <a href="">More solutions</a>
            </div>
          </div>
          <div className={style.left}>
            <div>
              <p>Resources</p>
              <a href="blog.html">Blog</a>
              <br />
              <a href="">Guidance</a>
              <br />
              <a href="">Customer stories</a>
              <br />
              <a href="">Support</a>
              <br />
              <a href="">Developer resources</a>
            </div>
            <div>
              <p>Platform</p>
              <a href="">Ethical principles</a>
              <br />
              <a href="">Services</a>
              <br />
              <a href="">Mobile</a>
              <br />
              <a href="">APIS</a>
              <br />
              <a href="">Security</a>
              <br />
              <a href="">GDPR</a>
            </div>
          </div>
          <div className={style.left}>
            <div>
              <p>About us</p>
              <a href="aboutus.html">Mission</a>
              <br />
              <a href="">Belonging</a>
              <br />
              <a href="">Company</a>
              <br />
              <a href="">Careers</a>
              <br />
              <a href="">Press &amp; awards</a>
              <br />
              <a href="">Contact</a>
            </div>
            <div>
              <p>Community</p>
              <a href="community.html">Events</a>
              <br />
              <a href="">Open</a>
              <br />
              <a href="">Talent Markers</a>
              <br />
              <a href="">Newsletter</a>
            </div>
          </div>
          <div className={style.right}>
            <h3>Modern Recruiter newsletter</h3>
            <p>
              Our bi-weekly newsletter full of inspiration, podcasts, trends and
              news.
            </p>
            <label>*Email address</label>
            <br />
            <input type="email" />
            <button type="submit">Subscribe</button>
            <div className={style.languageChoose}>
              <label htmlFor="language-choose">Choose your language</label>
              <br />
              <select className={style.option}>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="France">France</option>
                <option value="American">American</option>
                <option value="German">German</option>
              </select>
            </div>
          </div>
        </div>
        <div className={style.socialLink}>
          <div>
            <a href="https://www.facebook.com/greenhouse.io/">
              <img
                src="https://sharp.services.greenhouse.io/production/Facebook_200116_235458.svg?auto=compress&fit=max&lossless=true&q=90&w=60&s=38b1bf80b0469b5ee7a23e86aaa857c0b3dc2211419ad3c3cbca641ad934fbbb"
                alt="facebook"
              />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/company/greenhouse-inc-/">
              <img
                src="https://sharp.services.greenhouse.io/production/linkedin.svg?auto=compress&fit=max&lossless=true&q=90&w=60&s=34b956c8a836733a8ea153b0c863dc2ba794b55da68089e84562f4195d22367d"
                alt="linkedin"
              />
            </a>
          </div>
          <div>
            <a href="https://twitter.com/Greenhouse">
              <img
                src="https://sharp.services.greenhouse.io/production/twitter.svg?auto=compress&fit=max&lossless=true&q=90&w=60&s=4e1f4d71063dfc1bbd756ebaba43b29ad3c3684ac187e2de47e2c2f41290cd92"
                alt="twitter"
              />
            </a>
          </div>
          <div>
            <a href="https://www.youtube.com/channel/UCwLlhrx5lFssgTwKCHEuC8g">
              <img
                src="https://sharp.services.greenhouse.io/production/youtube.svg?auto=compress&fit=max&lossless=true&q=90&w=60&s=a3e493c512f90d2bcb6bd7f8629208b0adc0dcf405cc044f89bc8352fd39e62c"
                alt="youtube"
              />
            </a>
          </div>
        </div>
        <div className={style.footerBottom}>
          <div className= {style.l1} >
            <p>©2021 Greenhouse Software, Inc.</p>
          </div>
          <div className= {style.l2}>
            <div className= {style.div1}>
              <p>
                “Hire for what’s next” and “Greenhouse Talent Makers” are
                trademarks of Greenhouse&nbsp;Software.
              </p>
            </div>
            <div className={style.div2}>
              <a href="https://www.greenhouse.io/legal">Terms of service</a>
            </div>
            <div className={style.div3}>
              <a href="https://www.greenhouse.io/privacy-policy">
                Privacy policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

import React from "react";
import "./Footer.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="footer col-lg-12">
        <div className="container">
          <div className="row">
            <div className="col-md-3 m-b-30">
              <div className="footer-title m-t-5 m-b-20 p-b-8">About us</div>
              <p className="white-text">
                This website is created to provide all the resources to students
                at one place in a different way. Here you can find all the
                papers,notes,books etc. And there are some links and pdfs
                especially for CSE students from which you can master your
                Competitive Programming and Web Dev
              </p>
            </div>
            <div className="col-md-3 m-b-30">
              <div className="footer-title m-t-5 m-b-20 p-b-8">
                Latest Blogs
              </div>
              <div className="footer-links">
                <a href="https://reactjs.org/">React</a>
                <a href="https://www.youtube.com/watch?v=dDE3tOa4JUs">
                  Open Source
                </a>
                <a href="https://codeforces.com/">Competitive Programming</a>
              </div>
            </div>
            <div className="col-md-3 m-b-30">
              <div className="footer-title m-t-5 m-b-20 p-b-8">Contribute</div>
              <div className="footer-links">
                <a href="mailto:explorer3brain@gmail.com">Mail Us</a>
                <a href="./Resources/TermsAndConditions.md">
                  Terms and conditions
                </a>
                <a href="/">Privacy policy</a>
              </div>
            </div>
            <div className="col-md-3 m-b-30">
              <div className="footer-title m-t-5 m-b-20 p-b-8">Quick Links</div>
              <div className="footer-links">
                <a href="/">Home</a>
                <a href="/first">FirstYear</a>
                <a href="/second">Second Year</a>
                <a href="/cse">CSE-101</a>
              </div>

              <div className="footer-social-links m-t-30">
                <li>
                  {/* <a href="/">
                            <TwitterIcon/>
							</a> */}
                  <a href="https://www.linkedin.com/groups/12441358/">
                    <FaLinkedin />
                  </a>
                  <a href="https://instagram.com/confession_ctae?igshid=adv0ecm6xbrp">
                    <FaInstagram />
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        Copyright © 2020, All Rights Reserved
        <div>
          Created with ❤ by{" "}
          <a
            href="https://harsh0620.github.io/Harsh.codes/"
            target="__blank"
            style={{ color: "white" }}
          >
            <h4>hash0111</h4>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

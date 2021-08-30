import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-header extraBold--36 ">{`Let's have a chat`}</div>
      <div className="footer-boxes">
        <div className="box">
          <h2>Buid</h2>
          <p>Help you build something</p>
          <div className="arrow"></div>
        </div>
        <div className="box">
          <h2>Co-incubate</h2>
          <p>Co-incubate an idea together</p>
        </div>
        <div className="box">
          <h2>Customise</h2>
          <p>Customise a solution for your business</p>
        </div>
        <div className="box">
          <h2>Organise</h2>
          <p>Organise learning sessions with us</p>
        </div>
      </div>
      <div className="footer-lower">
        <div className="social__wrapper">
          <a
            href="https://www.facebook.com/codigo.co/"
            target="_blank"
            className="social__item"
            rel="noreferrer"
          >
            <img
              src="https://www.codigo.co/img/icons/social-facebook.svg"
              width="12"
              height="22"
            />
          </a>
          <a
            href="https://twitter.com/CodigoApps"
            target="_blank"
            className="social__item"
            rel="noreferrer"
          >
            <img
              src="https://www.codigo.co/img/icons/social-twitter.svg"
              width="23"
              height="18"
            />
          </a>
          <a
            href="https://www.instagram.com/hellocodigo/"
            target="_blank"
            className="social__item"
            rel="noreferrer"
          >
            <img
              src="https://www.codigo.co/img/icons/social-instagram.svg"
              width="21"
              height="19"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/codigo-pte-ltd"
            target="_blank"
            className="social__item"
            rel="noreferrer"
          >
            <img
              src="https://www.codigo.co/img/icons/social-linkedIn.svg"
              width="20"
              height="20"
            />
          </a>
        </div>

        <div className="texts body--14 text-center">
          <p className="texts body--14 text-center">
            Copyright © Codigo - Mobile App Developer Singapore
          </p>
        </div>
        <div className="texts body--14 text-center">
          <p>
            +65 6455 9790 • 24 Sin Ming Lane, Midview City #04-91 Singapore
            573970
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

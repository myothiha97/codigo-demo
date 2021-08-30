import React from "react";
import Link from "next/link";

const HiddenIcons = ({ isActive }) => {
  return (
    <div className={`hidden-icons ${isActive ? "is-active" : ""}`}>
      <Link href="https://www.facebook.com/codigo.co/">
        <img
          src="https://www.codigo.co/img/icons/social-facebook-white.svg"
          alt=""
          className="hidden-icon"
          width="12"
          height="22"
        />
      </Link>
      <Link href="https://twitter.com/CodigoApps">
        <img
          src="https://www.codigo.co/img/icons/social-twitter-white.svg"
          alt=""
          className="hidden-icon"
          width="23"
          height="18"
        />
      </Link>
      <Link href="https://www.instagram.com/hellocodigo/">
        <img
          src="https://www.codigo.co/img/icons/social-instagram-white.svg"
          alt=""
          className="hidden-icon"
          width="21"
          height="19"
        />
      </Link>
      <Link href="https://www.linkedin.com/company/codigo-pte-ltd">
        <img
          src="https://www.codigo.co/img/icons/social-linkedIn-white.svg"
          alt=""
          className="hidden-icon"
          width="20"
          height="20"
        />
      </Link>
    </div>
  );
};

export default HiddenIcons;

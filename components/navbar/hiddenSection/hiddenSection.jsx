import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import NavbarContext from "../../../context/navbar/navbarContext";
const HiddenSection = () => {
  const router = useRouter();
  const { toggleActive, isActive } = useContext(NavbarContext);
  return (
    <div className={`hidden-section ${isActive ? "is-active" : ""}`}>
      <Link href="/work">
        <div
          className={`hidden-section__link ${
            router.pathname === "/work-detail" ? "hidden" : ""
          }`}
          onClick={() => toggleActive(!isActive)}
        >
          <p className="link-text">Work</p>
        </div>
      </Link>

      <Link href="/work">
        <div
          className={`hidden-section__link ${
            router.pathname === "/work-detail" ? "hidden" : ""
          }`}
          onClick={() => toggleActive(!isActive)}
        >
          <p className="link-text">Solutions</p>
        </div>
      </Link>
      <Link href="/work">
        <div
          className={`hidden-section__link ${
            router.pathname === "/work-detail" ? "hidden" : ""
          }`}
          onClick={() => toggleActive(!isActive)}
        >
          <p className="link-text">Services</p>
        </div>
      </Link>
      <Link href="/work">
        <div
          className={`hidden-section__link ${
            router.pathname === "/work-detail" ? "hidden" : ""
          }`}
          onClick={() => toggleActive(!isActive)}
        >
          <p className="link-text">About us</p>
        </div>
      </Link>
      <Link href="/work">
        <div
          className={`hidden-section__link ${
            router.pathname === "/work-detail" ? "hidden" : ""
          }`}
          onClick={() => toggleActive(!isActive)}
        >
          <p className="link-text">Blog</p>
        </div>
      </Link>
      <Link href="/work">
        <div
          className="hidden-section__link hover-float"
          onClick={() => toggleActive(!isActive)}
        >
          <p className="link-text">Request a quote</p>
        </div>
      </Link>
      <Link href="/work">
        <div
          className="hidden-section__link"
          onClick={() => toggleActive(!isActive)}
        >
          <p className="link-text">{"Let's chat"}</p>
        </div>
      </Link>
    </div>
  );
};

export default HiddenSection;

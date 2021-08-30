import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import HiddenSection from "./hiddenSection/hiddenSection";
import HiddenIcons from "./hiddenIcons/hiddenIcons";
import HiddenMenu from "./hiddenMenu/hiddenMenu";
import NavbarContext from "../../context/navbar/navbarContext";

const NavBar = () => {
  const router = useRouter();
  const [isActive, toggleActive] = useState(false);
  return (
    <NavbarContext.Provider
      value={{ isActive: isActive, toggleActive: toggleActive }}
    >
      <div className="navbar clear-fix">
        <div className="content">
          <Link href="#">
            <div className="left">
              {router.pathname === "/work-detail" ? (
                <Link href="/work">
                  <div className="back-to-workpage__wrapper">
                    <div className="back-arrow"></div>
                    <div className="back-text">Back To Work</div>
                  </div>
                </Link>
              ) : (
                <Link href="/work">
                  <img
                    src="https://www.codigo.co/img/ui/logo-codigo-red.svg"
                    alt="codigo logo red"
                  />
                </Link>
              )}
            </div>
          </Link>
          <HiddenSection
            toggleActive={toggleActive}
            isActive={isActive}
          ></HiddenSection>
          <HiddenIcons isActive={isActive}></HiddenIcons>
          <div
            className="hiddenMenu-wrapper"
            onClick={() => toggleActive(!isActive)}
          >
            <HiddenMenu isActive={isActive}></HiddenMenu>
          </div>
          <div className="right">
            <Link href="/work">
              <div
                className={`link ${
                  router.pathname === "/work-detail" ? "hidden" : ""
                }`}
              >
                Work
              </div>
            </Link>
            <Link href="#">
              <div
                className={`link ${
                  router.pathname === "/work-detail" ? "hidden" : ""
                }`}
              >
                Solutions
              </div>
            </Link>
            <Link href="#">
              <div
                className={`link ${
                  router.pathname === "/work-detail" ? "hidden" : ""
                }`}
              >
                Services
              </div>
            </Link>
            <Link href="#">
              <div
                className={`link ${
                  router.pathname === "/work-detail" ? "hidden" : ""
                }`}
              >
                About us
              </div>
            </Link>
            <Link href="#">
              <div
                className={`link ${
                  router.pathname === "/work-detail" ? "hidden" : ""
                }`}
              >
                Blog
              </div>
            </Link>
            <Link href="#">
              <div className="navBtn">
                <button>Request Quote</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </NavbarContext.Provider>
  );
};

export default NavBar;

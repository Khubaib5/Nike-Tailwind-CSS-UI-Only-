import React, { useState } from "react";
import logo from "../assets/nike_landing_assets/assets/images/header-logo.svg";
import { navLinks } from "../constants";
import { hamburger } from "../assets/nike_landing_assets/assets/icons";
import { OutsideClickHandler } from "react-outside-click-handler";

function Nav() {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(false);
  return (
    // Logo
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-cotainer">
        <a href="/">
          <img src={logo} alt="Nike" width={130} height={29} />
        </a>

        {/* List Items */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="fonts-montserrats leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>

       
      </nav>
    </header>
  );
}

export default Nav;

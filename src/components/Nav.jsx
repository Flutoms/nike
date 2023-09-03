import React from "react";

import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons/index";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={120} height={29} />
        </a>
        <ul className="flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                className="font-monts errat leading-normal text-slate-gray"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} width={25} height={25} alt="hamburger" />
        </div>
      </nav>
    </header>
  );
};

export default Nav;

import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
import { copyrightSign } from "../assets/icons";

const Footer = () => {
  return (
    <section className="bg-black padding w-full">
      <footer className="max-container">
        <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
          <div className="flex flex-col items-start">
            <a href="/">
              <img width={150} height={46} src={footerLogo} alt="" />
            </a>
            <p className="text-base mt-6 leading-7 font-montserrat text-white-400 sm:max-w-sm">
              Get shoes ready for the new term at your nearest Nike store. Find
              your perfet size in store. Get rewards
            </p>
            <div className="flex items-center gap-5 mt-8">
              {socialMedia.map((icon) => (
                <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                  <img src={icon.src} alt={icon.alt} width={20} height={20} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            {footerLinks.map((sections) => (
              <div key={sections.title}>
                <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                  {sections.title}
                </h4>
                <ul>
                  {sections.links.map((links) => (
                    <li
                      key={links.name}
                      className="mt-3 font-montserrat text-white-400 text-base leading-normal cursor-pointer"
                    >
                      <a href="/"> {links.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
          <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
            <img
              className="rounded-full m-0"
              src={copyrightSign}
              width={18}
              height={18}
              alt=""
            />
            <p>Copyright. All rights reserved</p>
          </div>
          <p className="font-montserrat cursor-pointer">Terms & condition</p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;

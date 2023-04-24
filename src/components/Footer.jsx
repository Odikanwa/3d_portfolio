import React from "react";
import { BsMeta, BsTwitter, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

import { styles } from "../styles";

const Footer = () => {
  return (
    <div
      className={`${styles.paddingX} w-full flex items-center pt-4 pb-6 bottom-0 z-[-10] bg-opacity-0`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a
          href="#"
          className="py-[10px] px-[20px] text-[#050816] text-[16px] font-semibold bg-[#0ef] rounded-3xl shadow-glow shadow-[#0ef] hover:shadow-glow_lg animate-slideRight-animation delay-500"
        >
          Download CV
        </a>
        <div className="sm:flex flex-row gap-10">
          <a
            href="https://web.facebook.com/mike.kev.14"
            target="_blank"
            className={`${styles.socialMediaIcons}`}
          >
            <BsMeta className="hover:text-[#050816]" />
          </a>

          <a
            href="https://www.twitter.com/OdikanwaMichael"
            target="_blank"
            className={`${styles.socialMediaIcons}`}
          >
            <BsTwitter className="hover:text-[#050816]" />
          </a>
          <a
            href="https://www.linkedin.com/in/michael-odikanwa"
            target="_blank"
            className={`${styles.socialMediaIcons}`}
          >
            <FaLinkedinIn className="hover:text-[#050816]" />
          </a>
          <a
            href="https://github.com/Odikanwa"
            target="_blank"
            className={`${styles.socialMediaIcons}`}
          >
            <BsGithub className="hover:text-[#050816]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

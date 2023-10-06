import React from "react";
import facebookIcon from "../assets/social.png";
import twitterIcon from "../assets/twitter.png";
import linkedinIcon from "../assets/linkedin.png";
import instagramIcon from "../assets/instagram.png";
import discordIcon from "../assets/discord.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0 md:mr-4">
          <h2 className="text-2xl font-bold">FCC NITRR</h2>
          <p className="text-sm">GE Road, Amanaka, Raipur</p>
          <p className="text-sm">Email: financeclub@nitrr.ac.in</p>
        </div>

        <div className="text-center md:self-center md:mr-2">
        <h3 className="text-xl font-semibold mb-2 md:mr-12 md:mb-12">Follow Us</h3>
        <div className="flex items-center justify-center md:mr-12">
          <a
            href="https://github.com/FCC-NITRR"
            className="text-2xl hover:text-[#915EFF] mx-2"
          >
            <img src={facebookIcon} alt="Facebook" style={{width:'35px'}} />
          </a>
        
          <a
            href="https://www.linkedin.com/company/finance-nitrr/"
            className="text-2xl hover:text-[#915EFF] mx-2"
          >
            <img src={linkedinIcon} alt="LinkedIn" style={{width:'35px'}} />
          </a>
          <a
            href="https://www.instagram.com/fccnitrr/"
            className="text-2xl hover:text-[#915EFF] mx-2"
          >
            <img src={instagramIcon} alt="Instagram" style={{width:'35px'}} />
          </a>
          <a
            href="https://discord.com/invite/B3pk6UdQ88"
            className="text-2xl hover:text-[#915EFF] mx-2"
          >
            <img src={discordIcon} alt="Instagram" style={{width:'35px'}} />
          </a>
        </div>
      </div>

        <div className="text-center md:ml-4 md:self-center md:mt-6">
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="text-sm">
            <li className="mb-1">
              <a href="#" className="hover:text-[#915EFF]">Home</a>
            </li>
            <li className="mb-1">
              <a href="#about" className="hover:text-[#915EFF]">About</a>
            </li>
            <li className="mb-1">
              <a href="#events" className="hover:text-[#915EFF]">Events</a>
            </li>
            <li className="mb-1">
              <a href="#contact" className="hover:text-[#915EFF]">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-6 text-center md:ml-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} FCC. All rights reserved.</p>
        <p className="text-sm">Made with 💜 by the Tech Team </p>
      </div>
    </footer>
  );
};

export default Footer;

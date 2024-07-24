import { AiOutlineFacebook } from "react-icons/ai";
import { CiYoutube } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram, FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-[#051C34] py-8">
      <div className="w-full lg:w-10/12 mx-auto flex flex-col lg:flex-row justify-around items-center gap-1">
        <ul className="flex flex-col justify-center items-center lg:items-start gap-3">
          <li>
            <img src="/assets/logo-footer.png" alt="logo" className="mb-5 " />
          </li>
          <li className="flex justify-center lg:justify-start items-center gap-2">
            <FaLocationDot className="text-pramiry-50" />
            <span className="text-sm size-1/2 text-pramiry-50">
              25566 Hc 1, Glenallen, Alaska, 99588, USA
            </span>
          </li>
          <li className="flex justify-center lg:justify-start items-center gap-2">
            <FaPhoneAlt className="text-pramiry-50" />
            <span className="text-sm  text-pramiry-50">+603 4784 273 12</span>
          </li>
          <li className="flex justify-start items-center gap-2">
            <IoMdMail className="text-pramiry-50" />
            <span className="text-sm  text-pramiry-50">rentcars@gmail.com</span>
          </li>
        </ul>
        <ul className="flex flex-col justify-center items-center gap-3 text-pramiry-50 text-sm mt-8">
          <li className="mb-5 text-lg">
          Our Products
          </li>
          <li>
          Career
          </li>
          <li>
          Car
          </li>
          <li>
          Packages
          </li>
          <li>
          Features
          </li>
          <li>
          Priceline
          </li>
        </ul>
        <ul className="flex flex-col justify-center items-center gap-3 text-pramiry-50 text-sm mt-8">
          <li className="mb-5 text-lg">
          Resources
          </li>
          <li>
          Download
          </li>
          <li>
          Help Centre
          </li>
          <li>
          Guides
          </li>
          <li>
          Partner Network
          </li>
          <li>
          Cruises
          </li>
          <li>
          Developer
          </li>
        </ul>
        <ul className="flex flex-col justify-center items-center gap-3 text-pramiry-50 text-sm mt-8">
          <li className="mb-5 text-lg">
          About Rentcars
          </li>
          <li>
          Why choose us
          </li>
          <li>
          Our Story
          </li>
          <li>
          Investor Relations
          </li>
          <li>
          Press Center
          </li>
          <li>
          Advertise
          </li>
        </ul>
        <ul className="flex flex-col justify-start items-center gap-3 text-pramiry-50 text-sm lg:mb-20">
          <li className="mb-5 text-lg">
          Follow Us
          </li>
     <li className="flex justify-center items-center gap-2">
      <AiOutlineFacebook className="text-2xl text-[#9eaab5bf] hover:text-pramiry-700"/>
      <FaInstagram className="text-2xl text-[#9eaab5bf] hover:text-amber-600"/>
      <CiYoutube className="text-2xl text-[#9eaab5bf] hover:text-red-600"/>
    
     </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

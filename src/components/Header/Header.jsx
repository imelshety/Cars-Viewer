import {  useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { HiBars3 } from "react-icons/hi2";

const Header = () => {
  const [active, setActive] = useState(false);



  return (
    <>
      <header
        className={`hidden lg:flex  z-50 ps-8 bg-transparent mb-8 py-8 container mx-auto justify-around items-center gap-8`}
      >
        {/* logo */}
        <img src="/assets/logo.png" alt="logo img" />
        <ul className="flex justify-center items-center gap-8">
          <li>Become a renter</li>
          <li>Rental deals</li>
          <li>How it work</li>
          <li>Why choose us</li>
        </ul>
        <div className="flex justify-center items-center gap-3">
          <button className="uppercase border px-3 py-2 rounded-xl  text-pramiry-700 hover:bg-pramiry-700 hover:text-white duration-300 ease-in-out ">
            {" "}
            sign up
          </button>
          <button className="uppercase border px-3 py-2 rounded-xl text-white bg-pramiry-700 hover:bg-white hover:text-pramiry-700 ">
            {" "}
            sign in
          </button>
        </div>
      </header>
      <header
        className={`fixed lg:hidden bg-pramiry-50  top-0 left-0 right-0 flex justify-between p-3 z-50`}
      >
        <img src="/assets/logo.png" alt="logo img" />
        {active ? (
          <button
            className="text-4xl"
            onClick={() => setActive(false)}
          >
            <AiFillCloseCircle className="text-pramiry-700" />
          </button>
        ) : (
          <button
            className="text-4xl"
            onClick={() => setActive(true)}
          >
            <HiBars3 className="text-pramiry-700" />
          </button>
        )}
      </header>
      <div
        className={`lg:hidden w-screen h-screen py-10 fixed z-[998] left-0 right-0 backdrop-blur-sm bg-white duration-300 ${
          active ? "top-[120px]" : "-top-[100vh]"
        }`}
      >
        <ul className="flex flex-col justify-center items-center gap-8 mb-4">
          <li>Become a renter</li>
          <li>Rental deals</li>
          <li>How it work</li>
          <li>Why choose us</li>
        </ul>
        <div className="flex flex-col justify-center items-center gap-3 mt-2">
          <button className="uppercase border px-3 py-2 rounded-xl  text-pramiry-700 hover:bg-pramiry-700 hover:text-white duration-300 ease-in-out ">
            {" "}
            sign up
          </button>
          <button className="uppercase border px-3 py-2 rounded-xl text-white bg-pramiry-700 hover:bg-white hover:text-pramiry-700 ">
            {" "}
            sign in
          </button> 
        </div>
      </div>
    </>
  );
};
export default Header;

import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaBookmark,
  FaLocationDot,
  FaStar,
  FaUserCheck,
} from "react-icons/fa6";
import { API_URL } from "./../services/api";
import { CiUser } from "react-icons/ci";
import { MdSevereCold } from "react-icons/md";
import { FaCalendarAlt, FaLongArrowAltRight } from "react-icons/fa";
import { BiSolidEditLocation, BiSolidNetworkChart } from "react-icons/bi";
import InfoSpan from "./SubCompoents/InfoSpan";
import MainTitle from "./SubCompoents/MainTitle";
import { BsIncognito } from "react-icons/bs";
import { RiPriceTag2Fill } from "react-icons/ri";
import { IoIosChatbubbles } from "react-icons/io";
import { Link } from "react-router-dom";

const Home = () => {
  const visible = { opacity: 1, x: -20, transition: { duration: 1.2 } };
  const visibleTwo = { opacity: 1, x: 0, transition: { duration: 1.2 } };
  const [searchTerm, setSearchTerm] = useState("");

  const [cars, setCars] = useState([]);
  useEffect(() => {
    let getCars = async () => {
      const response = await axios.get(API_URL);
      setCars(response.data);
    };
    getCars();
  }, []);

  // Filter cars based on the search term
  const filteredCars = cars.filter((car) =>
    car.model.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <main className="mt-[8rem]">
      <section className="flex flex-col-reverse ps-5 lg:ps-0 lg:flex-row justify-between items-center">
        <div className="flex flex-col justify-center items-start gap-5 mx-auto">
          <h1 className="text-xl lg:text-5xl font-bold w-3/4">
            Find, book and rent a car{" "}
            <span className="text-pramiry-700">Easily</span>
          </h1>
          <p className="text-sm w-2/3">
            Get a car wherever and whenever you need it with your IOS and
            Android device.
          </p>
        </div>
        <div
          className="bg-no-repeat bg-right bg-cover"
          style={{ backgroundImage: `url('/assets/bg-header.png')` }}
        >
          <motion.img
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 1.2 } }}
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible,
            }}
            src="/assets/car-header.png"
            alt="car-header"
          />
        </div>
      </section>
      <section className="my-8 container mx-auto">
        <div className="w-full rounded border flex justify-between items-center">
          <FaLocationDot className="border-r pr-2 ms-2 text-pramiry-700 border-pramiry-700 text-2xl" />
          <input
            type="text"
            className="w-full p-2 focus:outline-none text-pramiry-800 focus:ring-2 focus:ring-pramiry-500 rounded bg-pramiry-50"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by car model"
          />
          <button className="border-b rounded-r p-2 text-white bg-pramiry-700">
            Search
          </button>
        </div>
        <div className="w-full my-8 flex flex-col justify-center items-center gap-8">
          <InfoSpan>POPULAR RENTAL DEALS</InfoSpan>
          <MainTitle>Most popular cars rental deals</MainTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full lg:w-10/12  my-8">
            {filteredCars.slice(0, 4).map((car) => (
              <div
                key={car.id}
                className="border shadow-xl shadow-pramiry-100 rounded-xl flex flex-col justify-center items-start gap-2 "
              >
                <img
                  src="/assets/car3.png"
                  alt={car.model}
                  className="mx-auto my-4"
                />
                <h3 className="text-base font-semibold ps-3">{car.model}</h3>
                <span className="flex gap-2 justify-center items-center ps-2">
                  <FaStar className="text-yellow-400" />
                  4.6{" "}
                  <span className="text-sm text-[#212529bf]">
                    (1345 reviews)
                  </span>
                </span>
                <div className="w-full flex justify-start lg:justify-center items-center gap-8 mb-4">
                  <span className="text-base text-[#212529bf] flex justify-center items-center gap-2 ps-3">
                    <CiUser />
                    Passanger
                  </span>
                  <span className="text-base text-[#212529bf] flex justify-start lg:justify-center items-center gap-2 ps-3">
                    <MdSevereCold />
                    Air conditioning
                  </span>
                </div>
                <div className="w-full flex justify-center items-center gap-8 border-b mb-4 pb-6">
                  <span className="text-base text-[#212529bf] flex justify-start lg:justify-center items-center gap-2 ps-3">
                    <FaCalendarAlt className="font-bold" />
                    2022
                  </span>
                  <span className="w-full text-base text-[#212529bf] flex justify-start lg:justify-center items-center gap-2 ps-3">
                    <BiSolidNetworkChart />
                    Automatic
                  </span>
                </div>
                <div className="w-full flex justify-between items-center px-4 pb-4 text-[#212529bf]">
                  <span>price</span>
                  <span>${car.price}/day</span>
                </div>
                <Link to={`/cars/${car.id}`} className="border rounded-r px-20 py-2 rounded mx-auto text-white bg-pramiry-600 mb-4 flex justify-center items-center gap-3 transition duration-300 ease-in-out hover:bg-pramiry-800">
                  View Details <FaLongArrowAltRight />
                </Link>
              </div>
            ))}
          </div>
          <div className=" mx-auto">
            <Link to="/cars" className="border rounded-r px-20 py-2 rounded mx-auto text-pramiry-700 bg-white mb-4 flex justify-center items-center gap-3 transition duration-300 ease-in-out hover:bg-pramiry-600 hover:text-white">
              View All <FaLongArrowAltRight />
            </Link>
          </div>
        </div>
      </section>
      <section className="my-8">
        <div className="w-full flex flex-col justify-center items-center gap-8">
          <InfoSpan>how it work</InfoSpan>
          <MainTitle>Most popular cars rental deals</MainTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 w-full lg:w-1/2  my-8">
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="bg-[#ECF5FF] p-12 text-center rounded-2xl">
                <BiSolidEditLocation className="text-5xl text-pramiry-700" />
              </div>
              <h3 className="text-2xl font-semibold">Choose location </h3>
              <p className="size-2/6 text-center text-sm text-[#212529bf]">
                Choose your and find your best car
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="bg-[#ECF5FF] p-12 text-center rounded-2xl">
                <BsIncognito className="text-5xl text-pramiry-700" />
              </div>
              <h3 className="text-2xl font-semibold">Pick-up date</h3>
              <p className="size-2/6 text-center text-sm text-[#212529bf]">
                Select your pick up date and time to book your car
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="bg-[#ECF5FF] p-12 text-center rounded-2xl">
                <FaBookmark className="text-5xl text-pramiry-700" />
              </div>
              <h3 className="text-2xl font-semibold">Book your car</h3>
              <p className="size-2/6 text-center text-sm text-[#212529bf]">
                Book your car and we will deliver it directly to you
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row justify-evenly items-center">
            <img src="/assets/ad1.png" alt="ad-img" />
            <img src="/assets/ad2.png" alt="ad-img" />
            <img src="/assets/ad3.png" alt="ad-img" />
            <img src="/assets/ad4.png" alt="ad-img" />
          </div>
        </div>
      </section>
      <section className="my-8 grid grid-cols-1 lg:grid-cols-2 overflow-x-hidden">
        <div
          className="bg-no-repeat bg-right bg-cover flex justify-start items-center"
          style={{ backgroundImage: `url('/assets/bg2.png')` }}
        >
          <motion.img
            initial="hidden"
            animate="visibleTwo"
            exit={{ opacity: 0, transition: { duration: 1.2 } }}
            variants={{
              hidden: { opacity: 0, x: -30 },
              visibleTwo,
            }}
            src="/assets/car-main.png"
            alt="car-header"
          />
        </div>
        <div className="my-8 flex flex-col gap-5 justify-start items-start ps-2 lg:ps-0">
          <InfoSpan>WHY CHOOSE US</InfoSpan>
          <h3 className="text-lg lg:text-2xl font-semibold">
            We offer the best experience with our rental deals
          </h3>
          <ul className="flex flex-col justify-start items-start gap-6 my-4">
            <li className="flex  justify-around gap-8">
              <div className="bg-[#ECF5FF] p-6 text-center rounded-2xl">
                <FaBookmark className="text-xl text-pramiry-700" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-base font-semibold">
                  Best price guaranteed
                </h3>
                <p className="text-center text-sm text-[#212529bf]">
                  Find a lower price? We’ll refund you 100% of the difference.
                </p>
              </div>
            </li>
            <li className="flex  justify-around gap-8">
              <div className="bg-[#ECF5FF] p-6 text-center rounded-2xl">
                <FaUserCheck className="text-xl text-pramiry-700" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-base font-semibold">
                  24 hour car delivery
                </h3>
                <p className="text-center text-sm text-[#212529bf]">
                  Book your car anytime and we will deliver it directly to you.
                </p>
              </div>
            </li>
            <li className="flex  justify-around gap-8">
              <div className="bg-[#ECF5FF] p-6 text-center rounded-2xl">
                <RiPriceTag2Fill className="text-xl text-pramiry-700" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-base font-semibold">
                  Best price guaranteed
                </h3>
                <p className="text-center text-sm text-[#212529bf]">
                  Find a lower price? We’ll refund you 100% of the difference.
                </p>
              </div>
            </li>
            <li className="flex  justify-around gap-8">
              <div className="bg-[#ECF5FF] p-6 text-center rounded-2xl">
                <IoIosChatbubbles className="text-xl text-pramiry-700" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-base font-semibold">
                  24/7 technical support
                </h3>
                <p className="text-center text-sm text-[#212529bf]">
                  Have a question? Contact Rentcars support any time when you
                  have problem.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="my-12 w-full bg-[#F7FBFF]">
        <div className="flex flex-col justify-center items-center gap-8 py-8">
          <InfoSpan>TEST IMONIALS</InfoSpan>
          <MainTitle>Most popular cars rental deals</MainTitle>
        </div>
        <div className="w-full lg:w-4/5 mx-auto my-8 flex flex-col lg:flex-row justify-center items-center gap-12 px-5 lg:ps-0">
          <div className="bg-white rounded-2xl flex flex-col lg:flex-row justify-center items-start gap-4 shadow-xl shadow-pramiry-200">
            <img
              src="/assets/hero1.png"
              alt="hero img"
              className="rounded-2xl"
            />
            <div className="flex flex-col justify-start items-start gap-4 px-20 py-8">
              <div className=" flex flex-col justify-start items-start gap-2">
                <h3 className="text-2xl lg:text-5xl font-semibold">
                  5.5 <span className="text-sm lg:text-lg">stars</span>
                </h3>
                <span className="flex gap-1 text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
              </div>
              <p className="text-sm">
                “I feel very secure when using caretall&apos s services. Your
                customer care team is very enthusiastic and the driver is always
                on time.”
              </p>
              <div className="mt-6 flex-col justify-start gap-3">
                <h4 className="font-semibold text-lg">Charlie Johnson</h4>
                <p className="text-[#212529bf] text-sm">
                  Last updated 3 mins ago
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl flex flex-col lg:flex-row justify-center items-start gap-4 shadow-xl shadow-pramiry-200">
            <img
              src="/assets/hero2.png"
              alt="hero img"
              className="rounded-2xl w-full lg:w-auto"
            />
            <div className="flex flex-col justify-start items-start gap-4 px-20 py-8">
              <div className=" flex flex-col justify-start items-start gap-2">
                <h3 className="text-2xl lg:text-5xl font-semibold">
                  5.5 <span className="text-sm lg:text-lg">stars</span>
                </h3>
                <span className="flex gap-1 text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
              </div>
              <p className="text-sm">
                “I feel very secure when using caretall&apos s services. Your
                customer care team is very enthusiastic and the driver is always
                on time.”
              </p>
              <div className="mt-6 flex-col justify-start gap-3">
                <h4 className="font-semibold text-lg">Charlie Johnson</h4>
                <p className="text-[#212529bf] text-sm">
                  Last updated 3 mins ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-8 w-full">
        <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-around items-center gap-8 py-8">
          <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start gap-6">
            <h3 className="text-2xl lg:text-5xl font-semibold text-center">
         
              Download Rentcars App for
              <span className="text-pramiry-700 px-3">FREE</span>
            </h3>
            <span className="text-sm text-[#212529bf]">For faster, easier booking and exclusive deals.</span>
            <div className="flex gap-3">
              <img src="/assets/andriod.png" alt="andriod app" />
              <img src="/assets/ios.png" alt="ios app" />
            </div>
            <form action="#" className="flex flex-col gap-4 w-1/2">
              <input type="text" className="py-2 px-12 rounded-xl text-pramiry-400 bg-[#E8F1FB] placeholder:text-pramiry-400 focus:outline-none focus:ring-2 focus:ring-pramiry-200" placeholder="Name" />
              <input type="text" className="py-2 px-12 rounded-xl text-pramiry-400 bg-[#E8F1FB] placeholder:text-pramiry-400 focus:outline-none focus:ring-2 focus:ring-pramiry-200" placeholder="Email" />
              <input type="text" className="py-2 px-12 rounded-xl text-pramiry-400 bg-[#E8F1FB] placeholder:text-pramiry-400 focus:outline-none focus:ring-2 focus:ring-pramiry-200" placeholder="Phone" />
              <button className="border  px-12 py-2 rounded-lg mx-auto text-white bg-pramiry-600 mb-4 flex justify-center items-center gap-3 transition duration-300 ease-in-out hover:bg-pramiry-800">
                  Send
                </button>
            </form>
          </div>
          <div className="flex justify-center">
           
            <img
              src="/assets/screen.png"
              alt="screen"
              className="max-w-[80%] max-h-[80%]"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

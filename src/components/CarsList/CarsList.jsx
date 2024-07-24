import { useEffect, useState } from "react";
import axios from "axios";
import { BiSolidNetworkChart } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { FaCalendarAlt, FaLongArrowAltRight, FaStar } from "react-icons/fa";
import { MdSevereCold } from "react-icons/md";
import { Link } from "react-router-dom";
import { API_URL } from "../services/api";
import InfoSpan from "../Home/SubCompoents/InfoSpan";
import MainTitle from "../Home/SubCompoents/MainTitle";
import { FaLocationDot } from "react-icons/fa6";

const CarsList = () => {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const carsPerPage = 8;

  useEffect(() => {
    const getCars = async () => {
      const response = await axios.get(API_URL);
      setCars(response.data);
    };
    getCars();
  }, []);

  // Calculate the cars to display on the current page
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;

  // Filter cars based on the search term
  const filteredCars = cars.filter(car =>
    car.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="breadcrumbs text-sm ms-10 lg:ms-[12rem] mt-20">
        <ul>
          <li className="text-pramiry-700"><Link to="/home">Home</Link></li>
          <li className="text-pramiry-700"><Link to="/cars">Cars</Link></li>
        </ul>
      </div>
      <section>
        <div className="w-full my-8 flex flex-col justify-center items-center gap-8">
          <InfoSpan>POPULAR RENTAL DEALS</InfoSpan>
          <MainTitle>Most popular cars rental deals</MainTitle>
          <div className="lg:w-1/2 rounded border flex justify-between items-center">
            <FaLocationDot className="border-r pr-2 ms-2 text-pramiry-700 border-pramiry-700 text-2xl" />
            <input
              type="text"
              className="w-full p-2 focus:outline-none text-pramiry-800 focus:ring-2 focus:ring-pramiry-500 rounded bg-pramiry-50"
              placeholder="Search by car model"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="border-b rounded-r p-2 text-white bg-pramiry-700">
              Search
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full lg:w-10/12 my-8">
            {currentCars.map((car) => (
              <div
                key={car.id}
                className="border shadow-xl shadow-pramiry-100 rounded-xl flex flex-col justify-center items-start gap-2 "
              >
                <img
                  src="/assets/car1.png"
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
                    Passenger
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
          <div className="join ">
            {[...Array(Math.ceil(filteredCars.length / carsPerPage)).keys()].map((num) => (
              <input
                key={num + 1}
                className={`join-item btn btn-square text-white ${
                  currentPage === num + 1 ? 'bg-black text-white' : 'bg-pramiry-700'
                }`}
                type="radio"
                name="options"
                aria-label={num + 1}
                onClick={() => paginate(num + 1)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CarsList;

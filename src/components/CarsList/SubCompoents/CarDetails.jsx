
import  { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../services/api";
import {  FaUserCheck } from "react-icons/fa6";
import InfoSpan from "../../Home/SubCompoents/InfoSpan";
import { motion } from 'framer-motion';
import { IoLogoModelS } from "react-icons/io";
import { MdDateRange, MdPriceChange } from "react-icons/md";
import { LuMilestone } from "react-icons/lu";
import { SiGoogleearthengine } from "react-icons/si";
import { ImPower } from "react-icons/im";

const CarDetails = () => {
  const { carId } = useParams();
  const [car, setCar] = useState(null);
  const visibleTwo = { opacity: 1, x: 0, transition: { duration: 1.2 } };

  useEffect(() => {
    const getCarDetails = async () => {
      const response = await axios.get(`${API_URL}/${carId}`);
      setCar(response.data);
    };
    getCarDetails();
  }, [carId]);

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <>
     <div className="breadcrumbs text-sm ms-10 lg:ms-[12rem] mt-20 lg:mt-10">
        <ul>
          <li className="text-pramiry-700"><Link to="/home">Home</Link></li>
          <li className="text-pramiry-700"><Link to="/cars">Cars</Link></li>
          <li className="text-pramiry-700"><Link to={`/cars/${car.id}`}>Details of {car.model}</Link></li>
        </ul>
      </div>
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
          <li className="flex  justify-around items-center gap-8">
              <div className="bg-[#ECF5FF] p-6 text-center rounded-2xl">
                <IoLogoModelS className="text-xl text-pramiry-700" />
              </div>
            
                <h3 className="text-base font-semibold">
              Model :   {car.model}
                </h3>
                
            </li>
            <li className="flex  justify-around items-center gap-8">
              <div className="bg-[#ECF5FF] p-6 text-center rounded-2xl">
                <FaUserCheck className="text-xl text-pramiry-700" />
              </div>
            
                <h3 className="text-base font-semibold">
             Owner  :  {car.owners} Passanger
                </h3>
                
            </li>
            <li className="flex  justify-around items-center gap-8">
              <div className="bg-[#ECF5FF] p-6 text-center rounded-2xl">
                <MdDateRange className="text-xl text-pramiry-700" />
              </div>
            
                <h3 className="text-base font-semibold">
               Year : {car.year} 
                </h3>
                
            </li>
            <li className="flex  justify-around items-center gap-8">
              <div className="bg-[#ECF5FF] p-6 text-center rounded-2xl">
                <LuMilestone className="text-xl text-pramiry-700" />
              </div>
            
                <h3 className="text-base font-semibold">
               Miles : {car.mileage} 
                </h3>
                
            </li>
            <li className="flex  justify-around items-center gap-8">
              <div className="bg-[#ECF5FF] p-6 text-center rounded-2xl">
                <SiGoogleearthengine className="text-xl text-pramiry-700" />
              </div>
            
                <h3 className="text-base font-semibold">
                Engine : {car.engine} 
                </h3>
                
            </li>
            <li className="flex  justify-around items-center gap-8">
              <div className="bg-[#ECF5FF] p-6 text-center rounded-2xl">
                <ImPower className="text-xl text-pramiry-700" />
              </div>
            
                <h3 className="text-base font-semibold">
                Horsepower : {car.horsepower} 
                </h3>
                
            </li>
            <li className="flex  justify-around items-center gap-8">
              <div className="bg-[#ECF5FF] p-6 text-center rounded-2xl">
                <MdPriceChange className="text-xl text-pramiry-700" />
              </div>
            
                <h3 className="text-base font-semibold">
                Price : {car.price} $
                </h3>
                
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default CarDetails;

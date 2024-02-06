"use client";

import React from "react";
import AOS from "aos";
import Image from "next/image";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800, // Durasi animasi dalam milidetik
      once: false, // Animasi hanya terjadi sekali
    });
  }, []);


  return (
    <>
      <section id="home" className="pt-20 pb-20 bg-primary">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2" data-aos="fade-up">
              <span className="block font-bold text-white text-center text-4xl mt-1 lg:text-5xl leading-9" style={{ lineHeight: "1.2" }}>
                VISIT OUR RESTO SOLO FOODS AND BEVERAGES
              </span>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:mt-9 lg:right-0" data-aos="fade-left">
                <Image src={"/images/home.png"} width={736} height={491}  alt="resto solo" className="relative z-10 max-w-full mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;

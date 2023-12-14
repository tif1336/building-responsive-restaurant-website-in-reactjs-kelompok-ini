"use client";

import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {

  
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800, // Durasi animasi dalam milidetik
      once: true, // Animasi hanya terjadi sekali
    });
  }, []);
  return (
    <>
      <section id="about" className="pt-36 pb-20 bg-primary">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-10 lg:w-1/2" data-aos="fade-right">
              <h4 className="font-bold text-orange-600 text-lg mb-5">About</h4>
              <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10">About Us</h3>
              <p className="font-medium text-base text-white opacity-40 max-w-xl lg:text-lg">
                At Resto Solo, we invite you to experience the heart and soul of Indonesia through a culinary journey that blends traditional flavors with modern twists. As a family restaurant, we take pride in crafting authentic Indonesian
                cuisines that bring people together, just like the warmth of a family gathering.
              </p>
            </div>
            <div className="w-full px-4 lg:w-1/2" data-aos="fade-left">
              <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10">Warm Atmosphere</h3>
              <p className="font-medium text-base text-white opacity-40  mb-6 lg:text-lg">
                Step into a world where the aroma of spices mingles with the comforting embrace of a cozy atmosphere. Whether you're here for a family celebration, a casual dinner, or a special date night, our inviting ambiance sets the
                stage for memorable moments.
              </p>
            </div>
            <div className="w-full px-4 mb-10 lg:w-1/2" data-aos="fade-right">
              <h2 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10">Historical Cuisine</h2>
              <p className="font-medium text-base text-white opacity-40 max-w-xl lg:text-lg">
                Indulge in the rich tapestry of Indonesian flavors with our diverse menu that showcases both time-honored classics and contemporary creations. Our chefs skillfully blend traditional spices and fresh, locally sourced
                ingredients to create dishes that capture the essence of Indonesia's culinary heritage.
              </p>
            </div>
            <div className="w-full px-4 lg:w-1/2" data-aos="fade-left">
              <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10">Our Team</h3>
              <p className="font-medium text-base text-white opacity-40  mb-6 lg:text-lg">
                Meet our dedicated team of passionate individuals who are committed to providing you with an exceptional dining experience. From the kitchen to the dining room, our staff is here to ensure your visit is delightful, and every
                dish is served with care and attention.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-48 bg-primary">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:mt-9 lg:right-0 mb-10 leading-5" data-aos="fade-right">
                <img width="460" height="690" src="/images/about.png" alt="resto solo" className="relative z-10 max-w-full mx-auto" />
              </div>
            </div>
            <div className="w-full self-center px-4 lg:w-1/2" data-aos="fade-left">
              <span className="block font-bold text-white text-center text-4xl mt-1 lg:text-5xl leading-9" style={{ lineHeight: "1.4" }}>
                ENJOY SOME FUN UNIQUE EXPERIENCES AT RESTO SOLO
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

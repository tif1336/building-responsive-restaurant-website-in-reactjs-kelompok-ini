"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface TestimonialApi {
  name: string;
  description: string;
}

const Testimonial = () => {
  const [testimonial, setTestimonial] = useState<TestimonialApi[]>([]);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = () => {
    fetch("https://resto-solo-app-production.up.railway.app/api/testimonial/")
      .then((response) => response.json())
      .then((data) => setTestimonial(data));
  };

  const renderTestimonials = () => {
    return testimonial.map((item, index) => (
      <div
        key={index}
        className={`w-full px-4 lg:w-1/2 xl:w-1/3 ${
          index % 2 === 0 ? 'data-aos="fade-right"' : 'data-aos="fade-left"'
        }`}
      >
        <div className="bg-secondary rounded-xl shadow-lg overflow-hidden mb-10">
          {/* <Image
            
            src={"../../avataaars.svg"}
            alt="Avatar"
            className="w-full"
          /> */}
          <div className="py-8 px-6">
            <h3>
              <a className="block mb-3 font-semibold text-xl text-dark hover:text-orange-600 truncate">
                {item.name}
              </a>
            </h3>
            <p className="font-medium text-base text-white opacity-40 mb-6">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <section id="testimonial" className="pt-36 pb-32 bg-primary">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-bold text-lg text-orange-600 mb-2">
                Testimonial
              </h4>
              <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">
                What They Say About Us?
              </h2>
              <p className="font-medium text-md text-white opacity-70 md:text-lg">
                Train of thoughts of our beloved customers 💖
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center">
            {renderTestimonials()}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;

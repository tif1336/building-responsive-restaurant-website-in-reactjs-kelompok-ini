"use client";

import React from "react";

interface TestimonialApi {
  name: string;
  description: string;
}

const Testimonial = () => {
  const [testimonial, setTestimonial] = React.useState<TestimonialApi[]>([]);

  React.useEffect(() => {
    fetch("http://127.0.0.1:8000/api/testimonial/")
      .then((response) => response.json())
      .then((data) => setTestimonial(data));
  }, []);

  return (
    <div>
      <section id="blog" className="pt-36 pb-32 bg-primary">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-bold text-lg text-orange-600 mb-2">Testimonial</h4>
              <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">What They Say About Us?</h2>
              <p className="font-medium text-md text-white opacity-70 md:text-lg">Train of thoughts of our beloved customers 💖</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="bg-secondary rounded-xl shadow-lg overflow-hidden mb-10">
                <img src="https://source.unsplash.com/360x200?avatar" alt="Programming" className="w-full" />
                <div className="py-8 px-6">
                  <h3>
                    <a className="block mb-3 font-semibold text-xl text-dark hover:text-orange-600 truncate">{testimonial.length > 0 ? testimonial[0].name : ""}</a>
                  </h3>
                  <p className="font-medium text-base text-white opacity-40 mb-6">{testimonial.length > 0 ? testimonial[0].description : ""}</p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="bg-secondary rounded-xl shadow-lg overflow-hidden mb-10">
                <img src="https://source.unsplash.com/360x200?avatar" alt="Coffee" className="w-full" />
                <div className="py-8 px-6">
                  <h3>
                    <a className="block mb-3 font-semibold text-xl text-dark hover:text-orange-600 truncate">{testimonial.length > 0 ? testimonial[1].name : ""}</a>
                  </h3>
                  <p className="font-medium text-base text-white opacity-40 mb-6">{testimonial.length > 0 ? testimonial[1].description : ""}</p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="bg-secondary rounded-xl shadow-lg overflow-hidden mb-10">
                <img src="https://source.unsplash.com/360x200?avatar" alt="Keyboard Mechanical" className="w-full" />
                <div className="py-8 px-6">
                  <h3>
                    <a className="block mb-3 font-semibold text-xl text-dark hover:text-orange-600 truncate">{testimonial.length > 0 ? testimonial[2].name : ""}</a>
                  </h3>
                  <p className="font-medium text-base text-white opacity-40 mb-6">{testimonial.length > 0 ? testimonial[2].description : ""}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;

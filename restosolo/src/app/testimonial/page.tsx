import React from "react";

const Testimonial = () => {
  return (
    <div>
      <section id="blog" className="pt-36 pb-32 bg-primary">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-bold text-lg text-orange-600 mb-2">
                Testimonial
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
                Informasi Terkini
              </h2>
              <p className="font-medium text-md text-white opacity-40 md:text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
                recusandae fugit sit non.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="bg-secondary rounded-xl shadow-lg overflow-hidden mb-10">
                <img
                  src="https://source.unsplash.com/360x200?programming"
                  alt="Programming"
                  className="w-full"
                />
                <div className="py-8 px-6">
                  <h3>
                    <a className="block mb-3 font-semibold text-xl text-dark hover:text-orange-600 truncate">
                      Review Keyboard
                    </a>
                  </h3>
                  <p className="font-medium text-base text-white opacity-40 mb-6">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Doloribus, accusamus!
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="bg-secondary rounded-xl shadow-lg overflow-hidden mb-10">
                <img
                  src="https://source.unsplash.com/360x200?coffee"
                  alt="Coffee"
                  className="w-full"
                />
                <div className="py-8 px-6">
                  <h3>
                    <a className="block mb-3 font-semibold text-xl text-dark hover:text-orange-600 truncate">
                      Menikmati Secangkir Kopi
                    </a>
                  </h3>
                  <p className="font-medium text-base text-white opacity-40 mb-6">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Doloribus, accusamus!
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="bg-secondary rounded-xl shadow-lg overflow-hidden mb-10">
                <img
                  src="https://source.unsplash.com/360x200?keyboard+mechanical"
                  alt="Keyboard Mechanical"
                  className="w-full"
                />
                <div className="py-8 px-6">
                  <h3>
                    <a className="block mb-3 font-semibold text-xl text-dark hover:text-orange-600 truncate">
                      Tips Belajar Programming
                    </a>
                  </h3>
                  <p className="font-medium text-base text-white opacity-40 mb-6">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Doloribus, accusamus!
                  </p>
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

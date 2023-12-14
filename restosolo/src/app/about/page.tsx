import React from "react";

const About = () => {
  return (
    <>
      <section id="about" className="pt-36 pb-20 bg-primary">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-10 lg:w-1/2">
              <h4 className="font-bold uppercase text-orange-600 text-lg mb-3">About Resto Solo</h4>
              <h2 className="font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl dark:text-white">Makanan nya lezat blablba enak bingitsss</h2>
              <p className="font-medium text-base text-white opacity-40 max-w-xl lg:text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos recusandae neque magnam odit pariatur a odio.</p>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10 dark:text-white">Mari sini makan makan</h3>
              <p className="font-medium text-base text-white opacity-40  mb-6 lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptas ex perferendis praesentium iusto placeat distinctio accusamus iste?</p>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-48 bg-primary">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:mt-9 lg:right-0 mb-10 leading-5">
                <img width="460" height="690" src="/images/about.png" alt="resto solo" className="relative z-10 max-w-full mx-auto" />
              </div>
            </div>
            <div className="w-full self-center px-4 lg:w-1/2">
              <span className="block font-bold text-white text-center text-4xl mt-1 lg:text-5xl leading-9">ENJOY SOME FUN UNIQUE EXPERIENCES AT SOLORESTO</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

import React from "react";

interface AboutSectionProps {
  title: string;
  content?: string;
  imageSrc?: string;
  alt?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ title, content, imageSrc, alt }) => (
  <div className="w-full px-4 mb-10 lg:w-1/2">
    {title === "About Us" && <h4 className="font-bold uppercase text-orange-600 text-lg mb-3">{title}</h4>}
    {imageSrc ? (
      <div className="relative mt-10 lg:mt-9 lg:right-0 mb-10 leading-5">
        <img width="460" height="690" src={imageSrc} alt={alt} className="relative z-10 max-w-full mx-auto" />
      </div>
    ) : (
      <>
        <h3 className={`font-semibold ${title === "About Us" ? "text-dark" : "text-white"} text-2xl mb-4 lg:text-3xl lg:pt-10 dark:text-white`}>{title}</h3>
        <p className={`font-medium text-base ${title === "About Us" ? "text-white" : "text-white opacity-40"} max-w-xl lg:text-lg`}>{content}</p>
      </>
    )}
  </div>
);

const About: React.FC = () => {
  return (
    <>
      <section id="about" className="pt-36 pb-20 bg-primary">
        <div className="container">
          <div className="flex flex-wrap">
            <AboutSection
              title="About Us"
              content="At Resto Solo, we invite you to experience the heart and soul of Indonesia through a culinary journey that blends traditional flavors with modern twists. As a family restaurant, we take pride in crafting authentic Indonesian
              cuisines that bring people together, just like the warmth of a family gathering."
            />

            <AboutSection
              title="Warm Atmosphere"
              content="Step into a world where the aroma of spices mingles with the comforting embrace of a cozy atmosphere. Whether you're here for a family celebration, a casual dinner, or a special date night, our inviting ambiance sets the
              stage for memorable moments."
            />
            <AboutSection
              title="Historical Cuisine"
              content="Indulge in the rich tapestry of Indonesian flavors with our diverse menu that showcases both time-honored classics and contemporary creations. Our chefs skillfully blend traditional spices and fresh, locally sourced
              ingredients to create dishes that capture the essence of Indonesia's culinary heritage."
            />
            <AboutSection
              title="Our Team"
              content="Meet our dedicated team of passionate individuals who are committed to providing you with an exceptional dining experience. From the kitchen to the dining room, our staff is here to ensure your visit is delightful, and every dish is served with care and attention."
            />
          </div>
        </div>
      </section>

      <section className="pb-48 bg-primary">
        <div className="container">
          <div className="flex flex-wrap">
            <AboutSection title="ENJOY SOME FUN UNIQUE EXPERIENCES AT RESTO SOLO" imageSrc="/images/about.png" alt="resto solo" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

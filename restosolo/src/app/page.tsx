import ResponsiveAppBar from "./navbar/page";
import HomePage from "./home/page";
import CustomizedAccordions from "./faq/page";
import Footer from "./footer/page";
import About from "./about/page";
import Testimonial from "./testimonial/page";
import MenuCard from "./menu/page";
import TestimonialForm from "./form/page";
import Author from "./author/page";

export default function Home() {
  return (
    <>
        <HomePage />
        <About />
        <MenuCard />
        <CustomizedAccordions />
        <Testimonial />
        <TestimonialForm />
        <Author/>
    </>
  );
}
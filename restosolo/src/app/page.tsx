import ResponsiveAppBar from "./navbar/page";
// import Home from "./home/page";
import CustomizedAccordions from "./faq/page";
import Footer from "./footer/page";
import About from "./about/page";
import Testimonial from "./testimonial/page";
import MenuCard from "./menu/page";
import TestimonialForm from "./form/page";


export default function Home() {
  return (
    <>
        <About />
        <MenuCard />
        <CustomizedAccordions />
        <Testimonial />
        <TestimonialForm />
    </>
  );
}
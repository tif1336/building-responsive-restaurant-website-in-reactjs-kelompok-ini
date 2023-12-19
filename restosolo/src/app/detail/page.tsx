//  create detail page, get data from api  tsx
"use client";

import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Detail = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800, // Durasi animasi dalam milidetik
      once: false, // Animasi hanya terjadi sekali
    });
  }, []);


  interface DetailMenu {
    id: number;
    category: string;
    name: string;
    image: string;
    price: number;
    description: string;
  }

  interface DetailMenuProps {
    menu: DetailMenu;
  }

    const DetailMenuCard = ({ menu }: DetailMenuProps) => {
        return (
        <div className="w-full px-4 mb-8 lg:w-1/2" data-aos="fade-up">
            <div className="flex flex-wrap items-center h-full overflow-hidden bg-white rounded shadow-lg">
            <div className="w-full h-64 overflow-hidden">
                <img
                src={menu.image}
                alt={menu.name}
                className="object-cover w-full h-full"
                />
            </div>
            <div className="w-full px-6 py-4">
                <h4 className="mb-3 text-xl font-semibold leading-tight text-gray-800">
                {menu.name}
                </h4>
                <p className="mb-4 text-base leading-normal text-gray-700">
                {menu.description}
                </p>
                <div className="flex items-center">
                <span className="text-xl font-semibold text-gray-800">
                    Rp. {menu.price}
                </span>
                </div>
            </div>
            </div>
        </div>
        );
    };

};

export default Detail;

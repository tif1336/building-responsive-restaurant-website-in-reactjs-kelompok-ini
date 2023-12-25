"use client";
import { Card } from "@mui/material";
import { Metadata } from "next";
import React, { Component, useState, useEffect } from "react";

type Props = {
  params: { menuid: number };
};

interface Menu {
  id: number;
  category: string;
  name: string;
  image: string;
  price: number;
  description: string;
}

interface MenuProps {
  menu: Menu;
}

export default function ProductDetails({ params }: Props) {
  // fetch data from api
  const [menu, setMenu] = useState<Menu>({} as Menu);
  useEffect(() => {
    fetchMenu();
  }, []);

  const url = `https://resto-solo-app-production.up.railway.app/api/menus/${params.menuid}/`;
  const fetchMenu = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMenu(data));
  };

  return (
    <div className="w-full flex flex-col bg-primary justify-center align-middle pt-20 pb-24 md:flex-row ">
      <div className="w-full flex justify-center align-middle lg:w-1/2">
        <div
          className="w-4/5 h-[480px] my-auto bg-cover rounded-2xl"
          style={{ backgroundImage: `url(${menu.image})` }}
        ></div>
      </div>
      <div className="w-full flex-col my-auto px-10 mt-10 text-white mx-auto lg:w-1/2 lg:pr-20 lg:px-0 lg:mt-0">
        <p className="text-2xl text-orange-500 font-semibold border-2 border-b-orange-500 border-x-primary border-t-primary px-2 mb-4">
          {menu.category}
        </p>
        <h3 className="text-6xl font-bold">{menu.name}</h3>
        <p className="text-4xl font-semibold pb-4">${menu.price}</p>
        <p className="text-white opacity-60">Description</p>
        <p className="text-justify">{menu.description}</p>
      </div>
    </div>
  );
}

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
    menu: Menu
}


export default function ProductDetails({ params }: Props) {

    // fetch data from api
    const [menu, setMenu] = useState<Menu>({} as Menu);
    useEffect(() => {
        fetchMenu();
    }, []);

    // const fetchAuthor = () => {
    //     fetch("https://resto-solo-app-production.up.railway.app/api/menus/{params.menuid}}")
    //         .then((response) => response.json())
    //         .then((data) => setAuthor(data));
    // };
    const url = `https://resto-solo-app-production.up.railway.app/api/menus/${params.menuid}/`;
    const fetchMenu = () => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setMenu(data));
    };

    console.log(menu);
    console.log(url);

    // return <h1>Details about product {params.menuid}</h1>;
    return (
        <div className="w-full flex bg-primary justify-center align-middle py-80">
            <div className="w-1/2 flex justify-center align-middle">
                <div className="w-4/5 h-[480px] my-auto bg-cover rounded-2xl" style={{backgroundImage: `url(${menu.image})`}}>
                </div>
            </div>
            <div className="w-1/2 flex-row my-auto text-white pr-60">
                <h3 className="text-6xl font-bold ">{menu.name}</h3>
                <p className="text-4xl font-semibold">${menu.price}</p>
                <p className="text-2xl text-orange-500 font-semibold border-2 border-r-orange-500 w-fit px-2">{menu.category}</p>
                <p>Description</p>
                <p className="text-justify">{menu.description}</p>
            </div>




        </div>
    );

}

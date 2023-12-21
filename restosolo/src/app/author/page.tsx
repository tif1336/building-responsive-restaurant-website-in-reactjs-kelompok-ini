"use client";

import React, { Component, useState, useEffect } from "react";
// import { render } from "react-dom";
import Image from "next/image";

interface AuthorApi {
    id: number;
    name: string;
    image: string;
    description: string;
}

interface AuthorContainerState {
    author: AuthorApi[];
}

export default function Author() {
    // fetch data from api
    const [author, setAuthor] = useState<AuthorApi[]>([]);
    useEffect(() => {
        fetchAuthor();
    }, []);

    const fetchAuthor = () => {
        fetch("https://resto-solo-app-production.up.railway.app/api/author")
            .then((response) => response.json())
            .then((data) => setAuthor(data));
    };

    return (
        <div className="bg-primary py-8">

            <div className="text-center mt-10">
                <h1 className="text-4xl font-bold text-white">Author</h1>
            </div>

            <div className="flex flex-col mx-auto md:flex-row items-center justify-center">

                {author.map((item, index) => (
                    <div key={index} className="mx-auto flex flex-col md:flex-row w-full md:w-1/2 lg:w-1/3">
                        <div className="w-full md:w-56 lg:w-72  my-2 mx-auto bg-secondary p-8 rounded-lg shadow-md">
                            <div className="mb-4">
                                <Image src={item.image} alt="Profile Picture" className="w-20 h-20 rounded-full mx-auto" />
                            </div>

                            <h2 className="text-xl font-semibold text-white text-center mb-2">{item.name}</h2>

                            <p className="text-gray-200 text-center">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}

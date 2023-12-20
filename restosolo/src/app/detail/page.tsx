"use client";
import React from 'react'
import { useRouter, useParams } from 'next/navigation';

interface DetailMenu {
  id: number;
  category: string;
  name: string;
  image: string;
  price: number;
  description: string;
}

interface DetailMenuProps {
  menu: DetailMenu[]
}

export default function Detail() {
  // const router = useRouter();
  // const { pos } = useParams() as { pos:  };

  // console.log(pos);

  return (
    <div>
      Detail
      {/* <p>ID: {pos}</p> */}
    </div>
  );
}
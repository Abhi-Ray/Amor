"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();
  setTimeout(() => {
    router.push("/Home");
  }, 1000);
  return (
    <div className="w-full bg-primary-color h-screen relative">
      <div className="h-screen flex justify-center items-center relative">
        <div className="w-full flex justify-center items-center">
          <Image src="/images/heart.png" width={90} height={90} />
        </div>
      </div>
      <div className="absolute bottom-2 left-0 w-full text-center">
        <p className="font-cirka text-4xl text-secondary-color font-bold pb-4 tracking-wider">
          Amor
        </p>
      </div>
    </div>
  );
};

export default page;

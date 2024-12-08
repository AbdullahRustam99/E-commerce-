import Image from "next/image";
import React from "react";
import Banner from "@/img/Image.png";
import Button from "@/components/Button";


const main = () => {
  return (
    <>
      <div className="max-w-[1440px]  ">
        <div className="bg-[#F5F5F5] w-full text-center py-2 ">
          <p className="text-[14px] font-semibold">Hellow Nike App</p>
          <p className="text-[11px] font-medium ">
            Download the app to access everything Nike.
            <span className="text-[11px] font-medium underline">
              Get Your Great
            </span>
          </p>
        </div>
        <div className="w-full flex-col flex gap-8 text-center px-10 justify-center items-center mb-4">
          <div>
            <Image src={Banner} alt="banner" />
          </div>
          <div className="flex flex-col justify-center gap-5 ">
            <div>
              <p className="text-[15px] font-medium ">First Look</p>
              <h1 className="text-[56px] font-medium leading-[70px]">
                Nike Air Max Pulse
              </h1>
            </div>
            <p className="w-[500px] text-[15px]">
              Extreme comfort. Hyper durable. Max volume. Introducing the Air
              Max Pulse —designed to push you past your limits and help you go
              to the max.
            </p>
            <div className="flex justify-center lg:gap-10 ">
              <Button text="Notify Me" />
              <Button text="Shop Air Max" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default main;

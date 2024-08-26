"use client";
import React, { useState } from "react";
import { Sora } from "next/font/google";
import Image from "next/image";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";
import PriceSlider from "../customSliders/Price";
import Thc from "../customSliders/Thc";
import Cbd from "../customSliders/Cbd";

const sora = Sora({ subsets: ["latin"] });

const SideBar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [active, setActive] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="relative z-40 ml-4 mr-2 sm:ml-10 w-96">
      {/* Hamburger Menu Button */}
      <Image
        src="/menu.png"
        height={50}
        width={50}
        alt="menu button"
        className="block sm:hidden"
        onClick={toggleSidebar}
      />

      {/* Sidebar */}
      <div
        className={`overflow-scroll sm:overflow-auto z-50 fixed top-0 left-0 w-96 bg-white h-full shadow-lg transform transition-transform duration-300 ${
          isSidebarVisible ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:block md:w-auto md:shadow-none md:bg-transparent`}
      >
        <p
          className={`text-[#045A5C] bg-[#62C3C61A] font-bold text-2xl w-28 mt-2 ml-16 sm:w-56 sm:p-1 sm:ml-10 text-center rounded-md ${sora.className}`}
        >
          Filter
        </p>
        <PriceSlider />
        <div className="mt-2 border-b border-b-[#62C3C64D] w-full"></div>

        <div>
          <div className="flex gap-6">
            <p
              className={`${sora.className} mt-4 ml-6 pl-24 font-semibold text-[18px] text-[#365758]`}
            >
              Herstellar
            </p>
            <button onClick={() => setActive(!active)}>
              <Image
                src="/Arrow_down.svg"
                height={15}
                width={15}
                alt="arrow"
                className="mt-4"
              />
            </button>
          </div>
          {active && <CustomCheckbox />}

          <button
            className={`${sora.className} text-[#045A5C] border-2 rounded-tl-xl w-52 pt-2 pb-2 mt-4 ml-16 rounded-br-xl border-[#ECFEAA]`}
          >
            mehr anzeigen
          </button>
        </div>

        <div className="mt-8 border-b border-b-[#62C3C64D] w-full"></div>
        <Thc />
        <div className="mt-2 border-b border-b-[#62C3C64D] w-full"></div>
        <Cbd />
        <div className="mt-2 border-b border-b-[#62C3C64D] w-full"></div>

        <div>
          <p className={`${sora.className} font-semibold text-[18px] ml-10 pt-4 pl-24 pb-4`}>
            Genetik
          </p>
          <div className={`${sora.className} text-[16px] mb-4 ml-7`}>
            <button className="bg-[#62C3C6] text-white rounded-md h-10 w-20 mr-2 sm:mr-0 hover:scale-[1.03] transition-all">
              Indica
            </button>
            <button className="text-[#045A5C] bg-[#62C3C64D] pl-2 hover:scale-[1.03] transition-all pr-2 rounded-md mr-2 sm:ml-4 h-10 w-20">
              Sativa
            </button>
            <button className="text-[#045A5C] bg-[#62C3C64D] pl-2 hover:scale-[1.03] transition-all pr-2 rounded-md sm:ml-4 h-10 w-20">
              Hybrid
            </button>
          </div>
        </div>

        <div className="mt-8 border-b border-b-[#62C3C64D] w-full"></div>

        <div>
          <p className={`${sora.className} font-semibold text-[18px] ml-8 pt-4 pl-20 pb-4`}>
            Bestrahltung
          </p>
          <div className={`${sora.className} text-[16px] mb-4 sm:flex ml-7`}>
            <button className="bg-[#62C3C6] text-white rounded-md h-10 28 ml-2 sm:ml-0 sm:w-32 hover:scale-110 transition-all">
              bestrahlt
            </button>
            <button className="text-[#045A5C] bg-[#62C3C64D] pl-2 hover:scale-[1.03] transition-all ml-4 sm:pr-2 rounded-md w-32  sm:ml-4 h-10 sm:w-36">
              nicht bestrahlt
            </button>
          </div>
        </div>

        <div className="mt-8 border-b border-b-[#62C3C64D] w-full"></div>

        <div className="flex gap-6">
          <p className={`${sora.className} mt-4 ml-5 pl-24 font-semibold text-[18px] text-[#365758]`}>
            Terpene
          </p>
          <Image
            src="/Arrow_down.svg"
            height={15}
            width={15}
            alt="arrow"
            className="mt-4"
          />
        </div>

        <div className="mt-8 border-b border-b-[#62C3C64D] w-full"></div>

        {/* Reset Filters Button */}
        <div className="flex gap-2 mt-4 pl-10 mb-2 ml-6">
          <Image src="/Close.svg" height={15} width={15} alt="close" />
          <button className={`${sora.className} font-normal`}>
            alle Filter zurücksetzen
          </button>
        </div>
      </div>

      {/* Overlay to close the sidebar on mobile */}
      {isSidebarVisible && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default SideBar;

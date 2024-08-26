import Image from "next/image";
import React from "react";
import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"] });

const Header2 = () => {
  return (
    <div className="hidden md:flex justify-between items-center">
      <Image
        src="/path.svg"
        height={400}
        width={400}
        className="ml-10 mt-8 mb-10 cursor-pointer"
        alt="Header Image"
      />
      <div className="mr-14 mt-4">
        <p className={`${sora.className} text-[#365758]`}>
          GKV mit Kostenübernahme?
        </p>
        <button
          className={`${sora.className} ml-8 text-[#045A5C] border-2 border-[#62C3C6] hover:scale-110 transition-all pl-10 pr-10 pt-1 pb-1 rounded-br-2xl rounded-tl-2xl`}
        >
          Preisoptionen
        </button>
      </div>
    </div>
  );
};

export default Header2;

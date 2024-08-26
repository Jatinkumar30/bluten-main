import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Manrope, Sora } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });
const sora = Sora({ subsets: ["latin"] });

const Footer = () => {
  const linkItems = [
    { href: "/", label: "Rezept einlösen" },
    { href: "/", label: "Live Bestand" },
    { href: "/", label: "Videosprechstunde" },
    { href: "/", label: "FAQs" },
    { href: "/", label: "Kontakt" },
  ];

  return (
    <footer className="bg-[#1A8D91] z-0 flex w-screen -ml-48 flex-col sm:flex-row sm:justify-evenly rounded-t-3xl text-center sm:text-left pr-48">
      {/* AGB, Impressum, Datenschutz Section */}
      <div
        className={`mt-8 sm:mt-20 font-light text-slate-100 opacity-60 ${manrope.className} mb-6 sm:mb-10`}
      >
        <Link href="/">
          <p>AGB</p>
        </Link>
        <Link href="/">
          <p className="pt-2">Impressum</p>
        </Link>
        <Link href="/">
          <p className="pt-2">Datenschutz</p>
        </Link>
      </div>

      {/* Links Section */}
      <div
        className={`${sora.className} text-sm sm:text-base mt-6 sm:mt-10 text-white`}
      >
        <div className="flex flex-col sm:flex-row sm:gap-8 gap-4">
          {linkItems.slice(0, 2).map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="flex justify-center sm:justify-start gap-1"
            >
              <Image src="/leaf.svg" height={10} width={10} alt="icon" />
              <p>{item.label}</p>
            </Link>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-8 gap-4 mt-4">
          {linkItems.slice(2).map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="flex justify-center sm:justify-start gap-1"
            >
              <Image src="/leaf.svg" height={10} width={10} alt={item.label} />
              <p>{item.label}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Standort Section */}
      <div className="mt-6 sm:mt-10">
        <p className={`${sora.className} font-light text-slate-100 opacity-60`}>
          Standort
        </p>
        <p
          className={`pt-3 text-sm sm:text-base font-extrabold text-white ${manrope.className}`}
        >
          Bergstraße 49 - 57 <br />
          69469 Weinheim <br />
          (3 Glocken Quartier)
        </p>
      </div>

      {/* Telephone Section */}
      <div className="mt-6 sm:mt-10">
        <p className={`${sora.className} font-light text-slate-100 opacity-60`}>
          Telefon
        </p>
        <p
          className={`pt-2 font-extrabold text-sm sm:text-base text-white ${manrope.className}`}
        >
          0223 545 5250
        </p>
      </div>

      {/* Schedule Section */}
      <div className="mt-6 sm:mt-10">
        <p
          className={`${sora.className} pb-2 font-light text-slate-100 opacity-60`}
        >
          Öffnungszeiten
        </p>
        <p className={`${sora.className} font-light text-slate-100 opacity-60`}>
          Mo-Fr
        </p>
        <p
          className={`pb-3 font-extrabold text-sm sm:text-base text-white ${manrope.className}`}
        >
          09:00 – 18:00 Uhr
        </p>
        <p className={`${sora.className} font-light text-slate-100 opacity-60`}>
          Sa
        </p>
        <p
          className={`font-extrabold text-sm sm:text-base text-white ${manrope.className}`}
        >
          09:00 – 14:00 Uhr
        </p>
      </div>
    </footer>
  );
};

export default Footer;

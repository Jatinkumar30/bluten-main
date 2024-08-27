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
    <footer className="bg-[#1A8D91] z-0 flex w-full flex-col sm:flex-row sm:justify-evenly xl:w-screen xl:-ml-48 rounded-t-3xl text-center sm:text-left p-4 sm:p-8">
      {/* AGB, Impressum, Datenschutz Section */}
      <div
        className={`mt-4 sm:mt-20 font-light text-slate-100 opacity-60 ${manrope.className} mb-6 sm:mb-10`}
      >
        <Link href="/">
          <p className="hidden sm:block">AGB</p>
        </Link>
        <Link href="/">
          <p className="pt-2 hidden sm:block">Impressum</p>
        </Link>
        <Link href="/">
          <p className="pt-2 hidden sm:block">Datenschutz</p>
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
      </div>

      {/* Standort Section */}
      <div className="mt-6 sm:mt-10">
        <p className={`${sora.className} font-light text-slate-100 opacity-60`}>
          Standort
        </p>
        <p
          className={`pt-3 text-sm sm:text-base font-extrabold text-white ${manrope.className}`}
        >
          Bergstraße 49 - 57 <br className="hidden sm:block" />
          69469 Weinheim <br className="hidden sm:block" />
          <span className="hidden sm:inline">(3 Glocken Quartier)</span>
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
        <p className={`font-extrabold text-sm sm:text-base text-white ${manrope.className}`}>
          Mo-Fr: 09:00 – 18:00 Uhr <br className="hidden sm:block" />
          Sa: 09:00 – 14:00 Uhr
        </p>
      </div>
    </footer>
  );
};

export default Footer;

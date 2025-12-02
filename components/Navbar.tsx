"use client";
import Image from "next/image";
import Link from "next/link";
import Globe from "./Icons/Globe";
import ArrowDown from "./Icons/ArrowDown";
import { useEffect, useRef, useState } from "react";
import MenuIcon from "./Icons/MenuIcon";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("English");
  const dropdownRef = useRef<any>(null);

  const languages = [
    { code: "en", label: "English" },
    { code: "es", label: "Spanish" },
    { code: "fr", label: "French" },
    { code: "de", label: "German" },
  ];

  const handleClick = () => {
    setOpen(!open);
  };

  const WebNav = () => {
    return (
      <header className="fixed w-full top-0 z-50 bg-[#0C1D0D99] backdrop-blur-xl ">
        <nav className="relative z-10 flex items-center justify-between px-6 py-4 md:px-8 lg:px-12">
          <div className="flex items-center gap-8 text-sm text-gray-300">
            <Link href="/#services" className="hover:text-white transition">
              Our Services
            </Link>
            <Link href="/#about" className="hover:text-white transition">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-white transition">
              Contact Us
            </Link>
          </div>

          {/* Logo */}
          <Link href="/" className="hover:text-white transition">
            <div className="flex items-center gap-3">
              <Image
                src="/pamcare-logo.png" // Replace with your actual phone mockup image
                alt="PamCare AI App on iPhone"
                width={150}
                height={20}
                className="relative z-10 drop-shadow-2xl"
                priority
              />
            </div>
          </Link>
          <div className="flex items-center gap-6">
            {/* Language + CTA */}
            <div className="relative flex items-center gap-4">
              <div className="relative">
                <button
                  onClick={handleClick}
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
                >
                  <Globe />
                  {selectedLang}
                  <ArrowDown />
                </button>

                {open && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 mt-2 w-40 bg-black-800 border border-black-700 
                     rounded-md shadow-lg py-1 animate-fadeIn z-20"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        className="w-full text-left px-3 py-2 text-gray-200 hover:bg-gray-700 hover:text-white transition"
                        onClick={() => {
                          console.log("Selected:", lang.code); // replace with your handler
                          setSelectedLang(lang.label!);
                          setOpen(false);
                        }}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="#"
                className="px-6 py-3 bg-gradient-to-r bg-primary rounded-xl text-white font-medium hover:shadow-lg hover:shadow-emerald-500/25 transition-all"
              >
                Sign Up/Download
              </Link>
            </div>
          </div>
        </nav>
      </header>
    );
  };

  const MobileNav = () => {
    return (
      <header className="fixed w-full top-0 z-50 bg-[#0C1D0D99] backdrop-blur-xl ">
        <nav className="relative z-10 flex items-center justify-between px-6 py-4 md:px-8 lg:px-12">
          {/* Logo */}
          <Link href="/" className="hover:text-white transition">
            <div className="flex items-center gap-3">
              <Image
                src="/pamcare-logo.png" // Replace with your actual phone mockup image
                alt="PamCare AI App on iPhone"
                width={100}
                height={20}
                className="relative z-10 drop-shadow-2xl"
                priority
              />
            </div>
          </Link>
          <div className="flex items-center gap-6">
            {/* Language + CTA */}
            <div className="relative flex items-center gap-4">
              <div className="relative">
                <MenuIcon />
                {/* <button
                  onClick={handleClick}
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
                >
                  <Globe />
                  {selectedLang}
                  <ArrowDown />
                </button> */}

                {open && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 mt-2 w-40 bg-black-800 border border-black-700 
                     rounded-md shadow-lg py-1 animate-fadeIn z-20"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        className="w-full text-left px-3 py-2 text-gray-200 hover:bg-gray-700 hover:text-white transition"
                        onClick={() => {
                          console.log("Selected:", lang.code); // replace with your handler
                          setSelectedLang(lang.label!);
                          setOpen(false);
                        }}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  };

  return (
    <div>
      <div className="md:block hidden ">
        <WebNav />
      </div>
      <div className="md:hidden block">
        <MobileNav />
      </div>
    </div>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import Globe from "./Icons/Globe";
import ArrowDown from "./Icons/ArrowDown";
import { useRef, useState } from "react";
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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
      <>
        <header className="fixed w-full top-0 z-50 bg-[#0C1D0D99] backdrop-blur-xl ">
          <nav className="relative z-10 flex items-center justify-between px-6 py-4 md:px-8 lg:px-12">
            {/* Logo */}
            <Link href="/" className=" hover:text-white transition">
              <div className="flex items-center gap-3">
                <Image
                  src="/pamcare-logo-white.png"
                  alt="PamCare AI"
                  width={100}
                  height={20}
                  className="relative z-10 drop-shadow-2xl"
                  priority
                />
              </div>
            </Link>
            <div className="flex items-center gap-6">
              {/* Menu Icon */}
              <div className="relative flex items-center gap-4">
                <button onClick={() => setMobileMenuOpen(true)}>
                  <MenuIcon />
                </button>
              </div>
            </div>
          </nav>
        </header>

        {/* Mobile Menu Backdrop */}
        <div
          className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed right-0 top-0 w-[70%] h-full bg-white z-[70] transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex bg-white flex-col h-full p-6 py-4">
            {/* Header with Close Button */}
            <div className="flex items-center justify-between mb-12 ">
              <Link className="opacity-0" href="/" onClick={() => setMobileMenuOpen(false)}>
                <Image
                  src="/pamcare-logo.png"
                  alt="PamCare AI"
                  width={120}
                  height={24}
                  className="object-contain"
                />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-full hover:bg-gray-100 transition-colors"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-black"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col items-end justify-start flex-1 gap-8">
              <Link
                href="/"
                className="text-1xl font-medium text-gray-900 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/#services"
                className="text-1xl font-medium text-gray-900 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Services
              </Link>
              <Link
                href="/#about"
                className="text-1xl font-medium text-gray-900 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-1xl font-medium text-gray-900 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="z-50 fixed">
      <div className="md:block hidden">
        <WebNav />
      </div>
      <div className="md:hidden block">
        <MobileNav />
      </div>
    </div>
  );
}

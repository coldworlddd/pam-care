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
      <header className="fixed w-full top-0 z-50 bg-[#0C1D0D99] backdrop-blur-xl ">
        <nav className="relative z-10 flex items-center justify-between px-6 py-4 md:px-8 lg:px-12">
          {/* Logo */}
          <Link href="/" className="hover:text-white transition">
            <div className="flex items-center gap-3">
              <Image
                src="/pamcare-logo.png"
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

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed  w-[70%] inset-0 bg-white z-50  transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex bg-white flex-col h-full p-6">
            {/* Header with Close Button */}
            <div className="flex items-center justify-between mb-12 ">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <Image
                  src="/pamcare-logo.png" // Assuming a dark logo exists or using text if not. I'll use text for safety if image missing, or just the same logo if it works on white.
                  // Actually, the design shows the logo in green/black on white. I'll try to use the same logo but maybe it needs a dark background?
                  // Wait, the design shows "PamCare AI" text next to logo.
                  // I will use the same logo image for now, assuming it's visible.
                  // If not, I'll just use text "PamCare AI"
                  alt="PamCare AI"
                  width={120}
                  height={24}
                  className="object-contain"
                />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
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
            <div className="flex flex-col items-end justify-center flex-1 gap-8">
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

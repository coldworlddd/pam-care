import Image from "next/image";
import React from "react";

export default function MenuIcon() {
  return (
    <div className="flex items-center gap-3">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 5L20 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M4 12L20 12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M4 19L20 19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

      {/* <Image
        src="/menu-icon.png" // Replace with your actual phone mockup image
        alt="PamCare AI App on iPhone"
        width={40}
        height={40}
        className="relative z-10 drop-shadow-2xl"
        priority
      /> */}
    </div>
  );
}

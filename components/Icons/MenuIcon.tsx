import Image from "next/image";
import React from "react";

export default function MenuIcon() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/menu-icon.png" // Replace with your actual phone mockup image
        alt="PamCare AI App on iPhone"
        width={40}
        height={40}
        className="relative z-10 drop-shadow-2xl"
        priority
      />
    </div>
  );
}

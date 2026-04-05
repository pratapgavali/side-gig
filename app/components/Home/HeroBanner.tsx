"use client";

import Image from "next/image";

export default function HeroBanner() {
  const handleBannerClick = () => {
    document
      .getElementById("available-subjects")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative w-full h-[700px] cursor-pointer"
      onClick={handleBannerClick}
    >
      <Image
        src="/hero_banner_dweb_2.png"
        alt="Hero Banner"
        fill
        className="object-cover hidden md:block"
        priority
      />

      <Image
        src="/hero_banner_mweb_2.png"
        alt="Hero Banner Mobile"
        fill
        className="object-cover md:hidden"
        priority
      />
    </section>
  );
}
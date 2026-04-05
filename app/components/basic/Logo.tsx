import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      {/* Logo Image */}
      <Image
        src="/logo_light_v1.png"
        alt="MyDigitalSpace Academy"
        width={150}
        height={80}
        className="w-auto h-[65px]"
        priority
      />
    </div>
  );
}

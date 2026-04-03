import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      {/* Logo Image */}
      <Image
        src="/logo-academy.png"
        alt="MyDigitalSpace Academy"
        width={120}
        height={120}
        className="h-24 md:h-32 w-auto"
        priority
      />
    </div>
  );
}

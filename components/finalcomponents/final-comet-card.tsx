"use client";
import { CometCard } from "@/components/ui/comet-card";
import Image from "next/image";

export default function CometCardDemo() {
  return (
    <CometCard>
      <button
        type="button"
        className="my-10  flex w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 opacity-20 p-2 saturate-0 md:my-20 md:p-4"
        aria-label="View invite F7RA"
        style={{
          transformStyle: "preserve-3d",
          transform: "none",
          opacity: 1,
        }}
      >
        <div className="mx-2 flex-1">
          <div className="relative mt-2 aspect-[3/4] w-full ">
            <Image
              src="/images/profileByGemini.png"
              alt="Invite background"
              fill
              className=" rounded-[20px] object-cover contrast-100 saturate-110  "
              priority={false}
            />
          </div>
        </div>
        <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white ">
          <div className="text-xs">Khaing Kyaw Min</div>
          <div className="text-xs text-gray-50 opacity-50">1991</div>
        </div>
      </button>
    </CometCard>
  );
}

"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const logos = [
  "pttavm-logo-png_seeklogo-452209.png",
  "trendyol.png",
  "amazon.png",
  "hepsiburada.png",
  "temu.png",
  "ciceksepeti.jpg",
  "n11.png",
  "koctas.png",
  "Idefix.png",
];

export default function LogoSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("mouseenter", () => {
        slider.style.animationPlayState = "paused";
      });
      slider.addEventListener("mouseleave", () => {
        slider.style.animationPlayState = "running";
      });
    }
  }, []);

  return (
    <div className="w-full overflow-hidden bg-neutral-950 border border-white/10 rounded-3xl py-6">
      <h2 className="text-sm text-neutral-400 mb-6 text-center">
        Entegrasyon Sağladığımız Pazaryerleri
      </h2>

      {/* Ana container ortalanmış */}
      <div className="relative flex justify-center overflow-hidden">
        <div
          ref={sliderRef}
          className="flex animate-scroll gap-6 min-w-max px-[5vw]" // yüzdeyle padding her iki yanda eşit olur
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-white rounded-xl w-[90px] h-[90px] md:w-[100px] md:h-[100px] flex-shrink-0"
            >
              <Image
                src={`/${logo}`}
                alt={logo}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-scroll {
            animation-duration: 40s;
          }
        }
      `}</style>
    </div>
  );
}

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TravelingHeroClone({
  centerImg = "../src/assets/images/center-img-hero.svg",
  leftTopImg = "../src/assets/images/left-img-hero.svg",
  leftBottomImg = "../src/assets/images/left-bottom-hero.jpg",
  rightTopImg = "../src/assets/images/right-img-hero.svg",
  rightBottomImg = "../src/assets/images/right-bottom-hero.jpg",
  headingTop = "Stories Worth",
  headingBottom = "Traveling For.",
}) {


     useEffect(() => {
      AOS.init({
        offset: 200,
        duration: 800,
        easing: 'ease-in-sine',
        delay: 100,
      });
    }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-tl from-blue-100 via-white to-blue-100 flex items-center justify-center pb-5">

      <div className="pointer-events-none select-none absolute inset-0 flex items-start justify-center pt-10">
        <span className="leading-none tracking-tighter font-extrabold text-[22vw] md:text-[16vw] text-blue-400/20">
          Traveling
        </span>
      </div>

      <div  className="relative z-10 w-full max-w-6xl px-4 md:px-6 pt-45 ">

        <div className="grid grid-cols-1 md:grid-cols-[170px_minmax(0,1fr)_170px] gap-6 md:gap-10">

          <div data-aos="fade-right" className="hidden md:flex flex-col justify-end gap-6">
            <RoundedCard>
              <Img src={leftTopImg} alt="left top" />
            </RoundedCard>
            <RoundedCard className="opacity-35">
              <Img src={leftBottomImg} alt="left bottom" />
            </RoundedCard>
          </div>

          <div data-aos="zoom-in" className="flex flex-col items-center gap-6">
           
            <RoundedCard  className="mx-auto w-full max-w-[500px]">
              <Img  src={centerImg} alt="center" />
            </RoundedCard>
            
            <div  className="text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-700">
                {headingTop}
              </h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-500 -mt-1">
                {headingBottom}
              </h3>
            </div>
          </div>

          <div data-aos="fade-left" className="hidden md:flex flex-col justify-end gap-6">
            <RoundedCard>
              <Img src={rightTopImg} alt="right top" />
            </RoundedCard>
            <RoundedCard className="opacity-35">
              <Img src={rightBottomImg} alt="right bottom" />
            </RoundedCard>
          </div>
        </div>



      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,rgba(255,255,255,0)_0%,rgba(2,6,23,0.06)_100%)]" />
    </section>
  );
}

function RoundedCard({ children, className = "" }) {
  return (
    <div
      className={
        "relative overflow-hidden rounded-[24px] bg-white/70 ring-1 ring-slate-200 shadow-xl backdrop-blur-sm " +
        className
      }
      style={{ aspectRatio: "1 / 1.1" }}
    >
      {children}
    </div>
  );
}

function Img({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-cover object-center"
      loading="lazy"
    />
  );
}

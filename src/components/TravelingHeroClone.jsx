import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import centerImg  from  "../assets/images/center-img-hero.svg"
import  leftTopImg from "../assets/images/left-img-hero.svg"
import  leftBottomImg from "../assets/images/left-bottom-hero.jpg"
import  rightTopImg from "../assets/images/right-img-hero.svg"
import  rightBottomImg from "../assets/images/right-bottom-hero.jpg"


export default function TravelingHeroClone({

    headingTop = "Stories Worth",
  headingBottom = "Traveling For."
  
}) {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-tl from-blue-100 via-white to-blue-100 flex items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24">

      {/* Background big text */}
      <div className="pointer-events-none select-none absolute inset-0 flex items-start justify-center pt-10">
        <span className="leading-none tracking-tighter font-extrabold text-[22vw] md:text-[16vw] text-blue-400/20">
          Traveling
        </span>
      </div>

      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-[170px_minmax(0,1fr)_170px] gap-6 md:gap-10">

          {/* Left side images */}
          <div data-aos="fade-right" className="hidden md:flex flex-col justify-end gap-6">
            <RoundedCard>
              <Img src={leftTopImg} alt="left top" />
            </RoundedCard>
            <RoundedCard className="opacity-35">
              <Img src={leftBottomImg} alt="left bottom" />
            </RoundedCard>
          </div>

          {/* Center image + text */}
          <div data-aos="zoom-in" className="flex flex-col items-center gap-6">
{/*            
<RoundedCard className="mx-auto w-full max-w-[400px] sm:max-w-[500px] overflow-hidden">
  <img
    src={centerImg}
    alt="center"
    className="w-full h-full object-cover block"
  />
</RoundedCard> */}

<RoundedCard className="mx-auto w-full max-w-[400px] sm:max-w-[500px] overflow-hidden">
  <img
    src={centerImg}
    alt="center"
    className="w-full h-full object-cover block"
    style={{ objectPosition: "center", margin: "-2% 0.3% -2% 0.2%"  }}
  />
</RoundedCard>



            <div className="text-center px-2">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight text-slate-700">
                {headingTop}
              </h2>
              <h3 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-500 -mt-1">
                {headingBottom}
              </h3>
            </div>
          </div>

          {/* Right side images */}
          <div data-aos="fade-left" className="hidden md:flex flex-col justify-end gap-6">
            <RoundedCard>
              <Img src={rightTopImg} alt="right top" />
            </RoundedCard>
            <RoundedCard className="opacity-35">
              <Img src={rightBottomImg} alt="right bottom" />
            </RoundedCard>
          </div>
        </div>

        {/* Mobile only left+right images stacked */}
        <div className="mt-8 grid grid-cols-2 gap-4 md:hidden">
          <RoundedCard>
            <Img src={leftTopImg} alt="left top mobile" />
          </RoundedCard>
          <RoundedCard>
            <Img src={rightTopImg} alt="right top mobile" />
          </RoundedCard>
          <RoundedCard className="opacity-35">
            <Img src={leftBottomImg} alt="left bottom mobile" />
          </RoundedCard>
          <RoundedCard className="opacity-35">
            <Img src={rightBottomImg} alt="right bottom mobile" />
          </RoundedCard>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,rgba(255,255,255,0)_0%,rgba(2,6,23,0.06)_100%)]" />
    </section>
  );
}

function RoundedCard({ children, className = "" }) {
  return (
    <div className={"overflow-hidden rounded-[20px] " + className}>
      {children}
    </div>
  );
}

function Img({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover block"
    />
  );
}

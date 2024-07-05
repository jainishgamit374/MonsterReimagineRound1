import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const scrollRef = useRef(null);
  useGSAP(() => {
    var t1 = gsap.timeline();
    t1.from(".animeHeading span", {
      y: 200,
      stagger: 0.1,
      duration: 2,
      ease: "power2.inOut",
      opacity: 0,
    }, "h");

    t1.from(".secondtext span", {
      y: 200,
      stagger: 0.1,
      duration: 2,
      ease: "power2.inOut",
      opacity: 0,
    }, "h");


    t1.from(".hero-images", {
      y: 200,
      stagger: 0.1,
      duration: 2,
      ease: "power2.inOut",
      opacity: 0,
    }, "h");

    t1.from(".hero-images .side-img1 img", {
      left: "50%",
      rotate: "0deg",
      stagger: 0.1,
      duration: 1,
      ease: "power2.inOut"
    }, "p");

    t1.from(".hero-images .side-img2 img", {
      left: "50%",
      rotate: "0deg",
      stagger: 0.1,
      duration: 1,
      ease: "power2.inOut",
    }, "p");
  });
  return (
    <>
      <div className="w-full h-screen overflow-hidden relative">
        <h1 data-content="REDBULL" className="animeHeading flex font-[Kajiro] leading-none tracking-[5vw] text-[70vw] md:text-[20vw] absolute  top-1/2 md:top-[58%] left-[52%] -translate-x-2/4 -translate-y-2/4 z-[4]">
          <div className="lg:flex">
            <div className="flex items-center justify-center">
              <span className="inline-block font-[Kajiro] kajiro">R</span>
              <span className="inline-block font-[Kajiro] kajiro">E</span>
              <span className="inline-block font-[Kajiro] kajiro">D</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="inline-block font-[Kajiro] kajiro">B</span>
              <span className="inline-block font-[Kajiro] kajiro">U</span>
              <span className="inline-block font-[Kajiro] kajiro">L</span>
              <span className="inline-block font-[Kajiro] kajiro">L</span>
            </div>
          </div>
        </h1>
        <h1 data-content="REDBULL" className="secondtext flex font-[Kajiro] leading-none tracking-[5vw] text-transparent text-[70vw] md:text-[20vw] absolute z-[9]  top-1/2 md:top-[58%] left-[52%] -translate-x-2/4 -translate-y-2/4 ">
          <div className="lg:flex">
            <div className="flex items-center justify-center">
              <span className="inline-block font-[Kajiro] kajiro">R</span>
              <span className="inline-block font-[Kajiro] kajiro">E</span>
              <span className="inline-block font-[Kajiro] kajiro">D</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="inline-block font-[Kajiro] kajiro">B</span>
              <span className="inline-block font-[Kajiro] kajiro">U</span>
              <span className="inline-block font-[Kajiro] kajiro">L</span>
              <span className="inline-block font-[Kajiro] kajiro">L</span>
            </div>
          </div>
        </h1>
        <div className="hero-images w-full h-full absolute z-[8]">
          <div className="side-img1" ref={scrollRef}>
            <img className="w-[35vw] md:w-[12vw] z-[8] absolute left-[33.5%] md:left-[40.5%] top-[30%] md:top-32 -rotate-[18deg] -translate-x-1/2" src="./p1.webp" alt="" />
          </div>
          <div className="img-1-hero">
            <img className="w-[100vw] md:w-[40vw] z-[9] absolute left-1/2 top-[25%]  md:top-16 -translate-x-1/2" src="./p2.png" alt="" />
          </div>
          <div className="side-img2" ref={scrollRef}>
            <img className="w-[35vw] md:w-[12vw] z-[8] absolute left-[67.5%] md:left-[59%] top-[30%] md:top-32 rotate-[18deg] -translate-x-1/2" src="./p3.webp" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
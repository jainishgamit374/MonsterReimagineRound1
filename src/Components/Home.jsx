import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = () => {
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
    },"h");

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
      ease: "power2.inOut"
    }, "p");




  });
  return (
    <>
      <div className="w-full h-screen overflow-hidden relative bg-blue-50 ">
        <h1 data-content="REDBULL" className="animeHeading flex font-[Kajiro] tracking-[5vw] text-[34vw] md:text-[20vw] absolute  top-1/2 left-[52%] -translate-x-2/4 -translate-y-2/4">
          <span className="inline-block font-[Kajiro] kajiro">R</span>
          <span className="inline-block font-[Kajiro] kajiro">E</span>
          <span className="inline-block font-[Kajiro] kajiro">D</span>
          <span className="inline-block font-[Kajiro] kajiro">B</span>
          <span className="inline-block font-[Kajiro] kajiro">U</span>
          <span className="inline-block font-[Kajiro] kajiro">L</span>
          <span className="inline-block font-[Kajiro] kajiro">L</span>
        </h1>
        <h1 data-content="REDBULL" className="secondtext flex font-[Kajiro] tracking-[5vw] text-transparent text-[34vw] md:text-[20vw] absolute z-[5]  top-1/2 left-[52%] -translate-x-2/4 -translate-y-2/4">
          <span className="inline-block font-[Kajiro] kajiro">R</span>
          <span className="inline-block font-[Kajiro] kajiro">E</span>
          <span className="inline-block font-[Kajiro] kajiro">D</span>
          <span className="inline-block font-[Kajiro] kajiro">B</span>
          <span className="inline-block font-[Kajiro] kajiro">U</span>
          <span className="inline-block font-[Kajiro] kajiro">L</span>
          <span className="inline-block font-[Kajiro] kajiro">L</span>
        </h1>

        <div className="hero-images w-full h-full absolute z-[1]">
          <div className="side-img1">
            <img className="w-[26vw] md:w-[12vw] z-[8] absolute left-[33.5%] md:left-[40.5%] top-[30%] md:top-16 -rotate-[18deg] -translate-x-1/2" src="https://www.redbull.com/energydrink/v1/resources/contentful/images/lcr8qbvxj7mh/2eA9T4loMyY8xusITbIbM5/23c70a0e9f7528efef52cd8e4180c703/DRES_US_SEABLUE-Juneberry-250ml_ambient_front_redbullcom.png?h=453&fm=webp&q=90" alt="" />
          </div>
          <div className="img-1-hero">
            <img className="w-[85vw] md:w-[40vw] z-[9] absolute left-1/2 top-[25%]  md:top-5 -translate-x-1/2" src="https://pngimg.com/uploads/red_bull/red_bull_PNG27.png" alt="" />
          </div>
          <div className="side-img2">
            <img className="w-[26vw] md:w-[12vw] z-[8] absolute left-[67.5%] md:left-[59%] top-[30%] md:top-16 rotate-[18deg] -translate-x-1/2" src="https://www.redbull.com/energydrink/v1/resources/contentful/images/lcr8qbvxj7mh/K1jlYK6k5ctAmxuxD6B26/1a6be2ef25790e920a4c0ca6fa1693d6/DRES_US_SUMMER-AMBER-SF-250ml_ambient_front_redbullcom.png?h=906&fm=webp&q=90" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

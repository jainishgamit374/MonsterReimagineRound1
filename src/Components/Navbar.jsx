import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { CiUser, CiSearch } from "react-icons/ci";
const Navbar = () => {
  const [nav, setNav] = useState();
  const [isAnimating, setIsAnimating] = useState(false);
  var firstRef = useRef(null);
  var secondRef = useRef(null);
  var navFirstRef = useRef(null);
  var navSecondRef = useRef(null);

  var handleNavClick = (dets) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setNav("rotated");
    var tl = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false);
      }
    })
    if (nav != "rotated") {
      tl.to(firstRef.current, {
        top: 0,
        ease: "expo.inOut",
        duration: 1,
      });
      tl.to(secondRef.current, {
        delay: -0.8,
        top: 0,
        ease: "expo.inOut",
        duration: 1,
      });
      gsap.to(navFirstRef.current, {
        backgroundColor: "white",
        width: 0,
        onComplete: () => {
          gsap.set(navFirstRef.current, {
            bottom: 15,
            margin: 0,
          });
          gsap.set(navFirstRef.current, {
            rotate: -45,
            delay: -10,
          });
          tl.to(navFirstRef.current, {
            width: "100%",
            delay: -0.5,
          });
        },
      });
      gsap.to(navSecondRef.current, {
        backgroundColor: "white",
        width: 0,
        onComplete: () => {
          gsap.set(navSecondRef.current, {
            top: 15,
            margin: 0
          });
          gsap.set(navSecondRef.current, {
            delay: -10,
            rotate: 45,
          });
          tl.to(navSecondRef.current, {
            width: "100%",
            delay: -0.3,
          });
        },
      });
      gsap.from(".animation span", {
        y: 100,
        stagger: .1,
        duration: 2,
        ease: 'power4.inOut'
      });
    } else {
      setNav("vertical");
      tl.to(secondRef.current, {
        top: "-100%",
        ease: "expo.inOut",
        duration: 1,
      });
      tl.to(firstRef.current, {
        delay: -0.8,
        top: "-100%",
        ease: "expo.inOut",
        duration: 1,
      });
      gsap.to(navFirstRef.current, {
        width: "0",
        backgroundColor: "#000",
      });
      tl.set(navSecondRef.current, {
        rotate: 0,
        marginTop: 6
      });
      tl.set(navFirstRef.current, {
        rotate: 0,
        marginBottom: 6
      });
      tl.to(navFirstRef.current, {
        width: "100%",
        duration: .4,
      });
      gsap.to(navSecondRef.current, {
        width: "0",
        backgroundColor: "#000",
      });
      tl.to(navSecondRef.current, {
        width: "100%",
        duration: .4,
      });
    }
  };

  return (
    <>
      <div ref={firstRef} className="h-screen w-full fixed bg-red-400 z-50 -top-[100%]"></div>
      <div ref={secondRef} className="h-screen w-full fixed bg-black z-50 -top-[100%]" >
        <div className="h-full w-full flex items-center flex-col gap-6 justify-center text-white">
          <h1 className="animation text-5xl flex flex-col h-10 overflow-hidden relative">
            <span className="monument inline-block">Home</span>
            <span className="monument inline-block">Home</span>
          </h1>
          <h1 className="animation text-5xl flex flex-col h-10 overflow-hidden relative">
            <span className="monument inline-block">Events</span>
            <span className="monument inline-block">Events</span>
          </h1>
          <h1 className="animation text-5xl flex flex-col h-10 overflow-hidden relative">
            <span className="monument inline-block">Athletes</span>
            <span className="monument inline-block">Athletes</span>
          </h1>
          <h1 className="animation text-5xl flex flex-col h-10 overflow-hidden relative">
            <span className="monument inline-block">Discover</span>
            <span className="monument inline-block">Discover</span>
          </h1>
          <h1 className="animation text-5xl flex flex-col h-10 overflow-hidden relative">
            <span className="monument inline-block">TV</span>
            <span className="monument inline-block">TV</span>
          </h1>
        </div>
      </div>
      <div className="h-[8vh] w-full flex items-center justify-between px-20">
        <div className="flex w-[20%] items-center gap-10">
          <div onClick={handleNavClick} className="h-8 w-10 navMenu cursor-pointer z-50 block relative">
            <span ref={navFirstRef} className="h-[2.3px] monument w-10 bg-black rounded-full inline-block absolute bottom-2 right-0"></span>
            <span ref={navSecondRef} className="h-[2.3px] monument w-10 bg-black rounded-full inline-block absolute top-2 left-0"></span>
          </div>
          <img
            className="h-5 object-contain"
            src="https://www.redbull.com/v3/resources/images/client/header/redbullcom-logo_double-with-text.svg"
            alt=""
          />
        </div>
        <div className="flex w-[60%] justify-center items-center gap-6 text-sm font-medium">
        <h1 className="links uppercase cursor-pointer">Energy Drinks</h1>
          <h1 className="links uppercase cursor-pointer">Events</h1>
          <h1 className="links uppercase cursor-pointer">Athletes</h1>
          <h1 className="links uppercase cursor-pointer">TV</h1>
        </div>
        <div className="flex w-[20%] justify-end gap-4 text-xl">
          <CiUser className="bg-zinc-300 p-2 text-4xl rounded-full text-black cursor-pointer" />
          <CiSearch className="bg-zinc-300 p-2 text-4xl rounded-full text-black cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default Navbar;

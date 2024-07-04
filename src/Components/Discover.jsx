import { MdArrowOutward } from "react-icons/md";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Discover = () => {
    const scrollRef = useRef(null);

    useGSAP(() => {
      const img = scrollRef.current.querySelector('.can-img');
  
      const createScrollTrigger = () => {
        const mq = window.matchMedia("(max-width: 768px)"); // md breakpoint
  
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  
        gsap.to(img, {
          y: mq.matches ? "100" : "-150",
          rotation: "10deg",
          scrollTrigger: {
            trigger: img,
            start: "bottom bottom",
            end: "top -100%",
            scrub: true,
            pin: true,
          },
          ease: "power1.inOut",
        });
        
        const t1 = gsap.timeline({
          scrollTrigger: {
            trigger: scrollRef.current,
            start: "top 70%",
            end: "bottom 50%",
            scrub: true,
          },
        });
  
        t1.from(".right-img", {
          opacity: 0,
          duration: 1,
          y: -200,
        }, 'i');
  
        t1.from(".left-img", {
          opacity: 0,
          duration: 1,
          y: -200,
        }, 'i');
      };
  
      createScrollTrigger();
      window.addEventListener('resize', createScrollTrigger);
  
      return () => {
        window.removeEventListener('resize', createScrollTrigger);
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }, []);

    return (
        <div className="w-full relative">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter text-center pt-20 monument">
          Discover
        </h1>
        <p className="text-center text-xs sm:text-sm md:text-base monument pb-10">
          The world of Red Bull
        </p>
        <div className="max-w-screen-xl m-auto min-h-screen relative py-8">
          <div className="img-container w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 justify-center items-center">
            <div className="drop-shadow-2xl flex items-center justify-center rounded-3xl border-2 bg-[#060B27] text-white">
              <h1 className="text-xs sm:text-sm py-8">⭐ Dive In To all Flavours</h1>
            </div>
            <div className="flex items-center justify-center row-span-1 md:row-span-3 rounded-3xl border-2 text-white z-20" ref={scrollRef}>
              <img className="can-img h-[50vw] md:h-[30vw] object-contain" src="https://m.media-amazon.com/images/I/51JFRoM+7HL._AC_UF1000,1000_QL80_.jpg" alt="" />
            </div>
            <div className="drop-shadow-2xl flex items-center justify-center row-span-1 md:row-span-2 rounded-3xl overflow-hidden z-10">
              <img className="right-img rounded-3xl w-full h-full object-top object-cover" src="https://i.pinimg.com/564x/53/d0/36/53d036121daaf0aba535bc22b082dfee.jpg" alt="" />
            </div>
            <div className="drop-shadow-2xl flex items-center justify-center row-span-1 md:row-span-2 rounded-3xl overflow-hidden z-10">
              <img className="left-img rounded-3xl w-full h-full object-cover" src="https://img.redbull.com/images/c_fill,f_auto,q_auto,w_770,h_578,g_auto,g_auto/redbullcom/2020/5/22/mey8s5v0xtjdm3v9vmul/the-red-bulletin-logo" alt="" />
            </div>
            <div className="drop-shadow-2xl flex items-center justify-center rounded-3xl border-2 bg-[#060B27] text-zinc-300 py-8">
              <a className="flex items-center gap-4 cursor-pointer">Over New Products <MdArrowOutward /></a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Discover
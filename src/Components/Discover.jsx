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
          y: mq.matches ? "-400" : "-50",
          x: mq.matches ? "-100" : "10",
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
        <div className="h-[80vh] w-full flex items-center justify-evenly">
          <div className="firstDiv flex flex-col gap-8">
            <div className="h-20 flex items-center justify-center text-white tracking-tighter w-96 rounded-2xl bg-[#060B27]">
              <h1>⭐ Dive In To all Flavours</h1>
            </div>
            <div>
                <img className="h-96 rounded-2xl w-96 object-cover" src="https://img.redbull.com/images/c_fill,f_auto,q_auto,w_770,h_578,g_auto,g_auto/redbullcom/2020/5/22/mey8s5v0xtjdm3v9vmul/the-red-bulletin-logo" alt="" />
            </div>
          </div>
          <div className="secondDiv">
            <div ref={scrollRef} className="h-[70vh] rounded-2xl border-2 flex items-center justify-center w-96 bg-white">
              <img className="can-img h-96 object-contain" src="https://m.media-amazon.com/images/I/51JFRoM+7HL._AC_UF1000,1000_QL80_.jpg" alt="" />
            </div>
          </div>
          <div className="thirdDiv flex flex-col gap-8">
            <img className="h-96 rounded-2xl w-96 object-cover object-top" src="https://i.pinimg.com/564x/53/d0/36/53d036121daaf0aba535bc22b082dfee.jpg" alt="" />
            <div className="h-20 flex items-center justify-center w-96 bg-[#060B27] rounded-2xl">
            <h1 className="text-white flex items-center gap-2">Our New Products <MdArrowOutward /></h1>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Discover
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Loader = () => {
  var videoRef = useRef();
  useEffect(() => {
    const handleDOMContentLoaded = () => {
      var videoElement = document.querySelector(".video");
      var x = videoElement.play();
      videoElement.addEventListener("ended", () =>{
        gsap.to(".loaderDiv", {
          top: "-100vh",
          duration: 1,
          ease: "expo.inOut"
        })
      });
    };
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      handleDOMContentLoaded();
    } else {
      document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
    }
  }, []);
  return (
    <div className="loaderDiv h-screen w-full fixed top-0 object-cover left-0 z-50 bg-red-200">
      <video className="video h-full object-cover w-full" src="./videoplayback.webm" muted></video>
    </div>
  )
}

export default Loader
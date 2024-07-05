import React from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Marque from "./Components/Marque";
import Footer from "./Components/Footer";
import Athletes from "./Components/Athletes";
import Discover from "./Components/Discover";
import Partners from "./Components/Partners";
import Ingredients from "./Components/Ingredients";
import Events from "./Components/Events";
import Loader from "./Components/Loader";
import Lenis from "lenis";

const App = () => {
  function lenisFn() {
    const lenis = new Lenis({
      wheelMultiplier: 2,
      duration: 1.5,
      easing: (x) => 1 - Math.pow(1 - x, 5),
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }
  lenisFn();
  return (
    <div className="h-full w-full overflow-hidden">
      <Loader/>
      <Navbar/>
      <Home/>
      <Marque/>
      <Discover/>
      <Ingredients/>
      <Athletes/>
      <Events />
      <Partners/>
      <Footer/>
    </div>
  );
};
export default App;
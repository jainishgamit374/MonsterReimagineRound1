import React from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Marque from "./Components/Marque";
import LocomotiveScroll from "locomotive-scroll";
import Footer from "./Components/Footer";
import Athletes from "./Components/Athletes";
import Discover from "./Components/Discover";
import Partners from "./Components/Partners";
import Ingredients from "./Components/Ingredients";
import Events from "./Components/Events";
import Loader from "./Components/Loader";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
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
import React from "react";
import Footer from "../Components/Footer";
import Navbarr from "../Components/Navbarr";
import Card from "../Components/Card";
import Carousel from "../Components/Carousel";
export default function Home() {
  return (
    <>
      <div>
        <Navbarr />
      </div>

      <div>
        <Carousel />
      </div>

      <div className="m-3">
        <Card />
        <Card />
        <Card />
        
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

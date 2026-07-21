import React from "react";
import Slider1 from "../assets/slider1.webp";
import Slider2 from "../assets/slider2.webp";
import Slider3 from "../assets/slider3.webp";
import Slider4 from "../assets/slider4.webp";
import Slider5 from "../assets/slider5.webp";
const Slider = () => {
  return (
    <>
       <style>
        {`
          @keyframes slide {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-slide { display: flex;
            min-width: max-content;
            gap: 3rem; /* separación entre imágenes */
            animation: slide 40s linear infinite;
          }
          .slider-img {
          padding:auto;
          margin:auto;
            width: 120px;
            height: 100px; /* tamaño uniforme */
            object-fit: contain; /* 👈 asegura que no se deformen */
          }
        `}
      </style>

      <div className="overflow-hidden bg-gray-400 relative w-full ">
        <div className="animate-slide">
          <img src={Slider1} alt="logo1" className="slider-img" />
          <img src={Slider2} alt="logo2" className="slider-img" />
          <img src={Slider3} alt="logo3" className="slider-img" />
          <img src={Slider4} alt="logo4" className="slider-img" />
          <img src={Slider5} alt="logo5" className="slider-img" />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbQgfP1VtVEGwBJcjAwNhPhuNzyYp0OCMwMXABIn5yoaGbT1D4ehprvFAF&s=10"
           className="slider-img"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTflnJ57QO32ZfRw1gorYzwK3c9FM2twu4mzlhQGeHlzWtAr0_nplTl3s4&s=10"
            className="slider-img"
          />
          <img
            src="https://w7.pngwing.com/pngs/355/723/png-transparent-apple-computer-laptop-technology-brands-and-logos-icon.png"
            className="slider-img"
          />
          <img
            src="https://www.kabifperu.com/imagenes/prod-24022021125524-msi-deta.png"
           className="slider-img"
          />
          {/* duplicados */}
          <img src={Slider1} alt="logo1" className="slider-img" />
          <img src={Slider2} alt="logo2" className="slider-img" />
          <img src={Slider3} alt="logo3" className="slider-img" />
          <img src={Slider4} alt="logo4" className="slider-img" />
          <img src={Slider5} alt="logo5" className="slider-img" />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbQgfP1VtVEGwBJcjAwNhPhuNzyYp0OCMwMXABIn5yoaGbT1D4ehprvFAF&s=10"
           className="slider-img"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTflnJ57QO32ZfRw1gorYzwK3c9FM2twu4mzlhQGeHlzWtAr0_nplTl3s4&s=10"
           className="slider-img"
          />
          <img
            src="https://w7.pngwing.com/pngs/355/723/png-transparent-apple-computer-laptop-technology-brands-and-logos-icon.png"
           className="slider-img"
          />
          <img
            src="https://www.kabifperu.com/imagenes/prod-24022021125524-msi-deta.png"
            width={"120px"}
          />
        </div>
      </div>
    </>
  );
};

export default Slider;

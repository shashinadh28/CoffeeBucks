"use client";
import { Raleway } from "next/font/google";
import { Rubik } from "next/font/google";
import { Poppins } from "next/font/google";
import { useState } from "react";

// Importing fonts for styling
const pop = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});
const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const rale = Raleway({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

// Main section component
export default function Section6() {
  return (
    <div>
      <div>
        <div className="bg-white h-[23.5rem] w-full"> </div>

        {/* White background for the circle slider */}
        <div className="bg-white h-[40rem] w-full">
          <div>
            {/* Reduced the gap by adjusting margin-top */}
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-row mt-8 gap-3 items-center justify-center">
                {/* Changed mt-20 to mt-8 */}
                <div className="bg-black h-1 w-6"> </div>
                <div className="text-black text-[3vh]">Testimonial</div>
              </div>
              <div className="text-black text-[8vh] font-semibold pb-20">
                Our Customer <span className="text-[#01816f]">Testimonials</span>
              </div>
            </div>
          </div>
          {/* CircleSlider component here */}
          <CircleSlider />
        </div>
      </div>
    </div>
  );
}

// CircleSlider component
const CircleSlider = () => {
  const images = [
    { src: "/circle1.png", text: "John Quinctsien ",subText: "The Cappiccino here is my loove"},
    { src: "/circle2.png", text: "Cobalt", subText: "I loved it absolutly" },
    { src: "/circle3.png", text: "Carelena" ,subText: "The Cookies over her are the heaven"},
    { src: "/circle4.png", text: "Scarlett",subText: "Fantastic Coffee and the snacks " },
  ]; // Array of images with text

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-[32vh]">
      {/* Left arrow button */}
      <button
        onClick={handlePrev}
        className="absolute left-[46vh] z-10 bg-gray-500 text-white p-2 rounded-full hover:bg-gray-700" // Adjusted position
      >
        &lt; {/* Left arrow icon */}
      </button>

      {/* Container for images */}
      <div className="flex items-center justify-center">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative transition-all duration-300 ${
              currentIndex === index
                ? "w-[30vh] h-[30vh] border-4 border-yellow-500 rounded-full"
                : "w-[25vh] h-[25vh]"
            }`}
          >
            {/* Image element */}
            <img
              src={image.src}
              alt={`Circle ${index + 1}`}
              className={`w-full h-full object-cover rounded-full ${
                currentIndex === index ? "scale-100" : "scale-75"
              } transition-transform duration-300`}
            />
          </div>
        ))}
      </div>

      {/* Right arrow button */}
      <button
        onClick={handleNext}
        className="absolute right-[47vh] z-10 bg-gray-500 text-white p-2 rounded-full hover:bg-gray-700" // Adjusted position
      >
        &gt; {/* Right arrow icon */}
      </button>

      {/* Text below the images */}
      <div className="mt-4 text-center font-bold   text-[27px]  text-black">
        <div className=" flex flex-row">

        </div>
        {images[currentIndex].text}
        <div className="text-sm text-gray-500 font-mono mt-3">{images[currentIndex].subText}</div> {/* Subtext */}

        <div className="flex justify-center mt-2">
    {currentIndex === 0 && (
      <>
        {/* 4 full stars for the first image */}
        <i className="ri-star-s-fill text-yellow-500"></i>
        <i className="ri-star-s-fill text-yellow-500"></i>
        <i className="ri-star-s-fill text-yellow-500"></i>
        <i className="ri-star-s-fill text-yellow-500"></i>
      </>
    )}

    {currentIndex === 1 && (
      <>
        {/* 4 full stars + 1 half-star for the second image */}
        <i className="ri-star-s-fill text-yellow-500"></i>
        <i className="ri-star-s-fill text-yellow-500"></i>
        <i className="ri-star-s-fill text-yellow-500"></i>
        <i className="ri-star-s-fill text-yellow-500"></i>
        <i className="ri-star-half-fill text-yellow-500"></i>
      </>
    )}

    {currentIndex === 2 && (
      <>
        {/* 5 full stars for the third image */}
        <i className="ri-star-s-fill text-yellow-500"></i>
        <i className="ri-star-s-fill text-yellow-500"></i>
        <i className="ri-star-s-fill text-yellow-500"></i>
        <i className="ri-star-s-fill text-yellow-500"></i>
        <i className="ri-star-s-fill text-yellow-500"></i>
      </>
    )}

    {currentIndex > 2 && (
      <>
        {/* Default 3 full stars for any other images */}
        <i className="ri-star-s-fill text-yellow-500"></i>
        <i className="ri-star-s-fill text-yellow-500"></i>
        <i className="ri-star-s-fill text-yellow-500"></i>
      </>
    )}
  </div>
      </div>
    </div>
  );
};

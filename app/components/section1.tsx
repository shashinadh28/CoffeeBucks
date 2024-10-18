import { Raleway } from "next/font/google";
import Image from "next/image";
import { Rubik } from "next/font/google";
import { Poppins } from "next/font/google";
import { IoRemoveOutline } from "react-icons/io5";


const pop = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Specify weights
  subsets: ["latin"], // Specify subsets
  display: "swap",
});
const rubik = Rubik({
    weight: ["300", "400", "500", "600", "700", "800", "900"], // Specify weights
    subsets: ["latin"], // Specify subsets
    display: "swap",
  });

const rale = Raleway({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Specify weights
    subsets: ["latin"], // Specify subsets
    display: "swap",
  });


export default function Section1() {
    return (
        <div>
            <div className="bg-[#01816f] h-[68rem] w-full">
        {/* navbar start */}
        <div className="flex justify-center">
          <div className="h-[4.5rem] w-[75rem] flex items-center justify-between bg-white rounded-full mt-[30px]">
            <div className="flex flex-row justify-center items-center ml-3 text-black">
              <div className="bg-[#01816f] w-12 rounded-full flex justify-center">
                <i className="ri-drinks-fill text-white text-[2rem]"></i>
              </div>
              <div
                className={`${pop.className} text-black font-semibold ml-3 text-[18px]`}
              >
                Coffee Bucks
              </div>
              <div className="flex flex-row gap-x-9 ml-32 text-[17px] items-center">
                <div className="hover:text-[#01816f] cursor-pointer">Home</div>
                <div className="hover:text-[#01816f] cursor-pointer">
                  Features
                </div>
                <div className="hover:text-[#01816f] cursor-pointer">
                  How it Works
                </div>
                <div className="hover:text-[#01816f] cursor-pointer">
                  About us
                </div>
                <div className="hover:text-[#01816f] cursor-pointer">
                  Testimonial
                </div>
                <div className="hover:text-[#01816f] cursor-pointer">Blog</div>
                <div className="bg-[#01816f] w-[22vh] items-center ml-[100px] flex justify-center text-white rounded-full h-12">
                  Get the App
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* navbar end */}
        {/*  row start */}
        <div className=" flex flex-row  justify-between   ">
          {/* col start */}
          <div className=" flex flex-col ml-[14vh] mt-[32vh] ">
            <div className=" text-white font-semibold text-[40px]  "> 5M+ </div>
            <div className={`${rale.className}  text-[24px]`}>
              {" "}
              Active Users{" "}
            </div>
           
            {/* row start */}
            <div className=" flex flex-row relative mt-3">
              <div className=" bg-white h-[8vh] w-[8vh] rounded-full absolute">
                <Image
                  src={"/man2.png"}
                  alt={"man"}
                  height={100}
                  width={100}
                  className="rounded-full w-[7vh] h-[7vh] ml-1 mt-1"
                />
              </div>
              <div className=" bg-white h-[8vh] w-[8vh] rounded-full ml-8  absolute">
                <Image
                  src={"/man1.png"}
                  alt={"man"}
                  height={100}
                  width={100}
                  className="rounded-full w-[7vh] h-[7vh] ml-1 mt-1"
                />
              </div>
              <div className=" bg-white h-[8vh] w-[8vh] rounded-full ml-[70px]  absolute">
                <Image
                  src={"/family1.png"}
                  alt={"man"}
                  height={100}
                  width={100}
                  className="rounded-full w-[7vh] h-[7vh] ml-1 mt-1"
                />
              </div>
              <div className=" bg-white h-[8vh] w-[8vh] rounded-full ml-[105px]  absolute">
                <Image
                  src={"/women1.png"}
                  alt={"man"}
                  height={100}
                  width={100}
                  className="rounded-full w-[7vh] h-[7vh] ml-1 mt-1"
                />
              </div>
              <div className=" bg-white h-[8vh] w-[8vh] rounded-full ml-[140px]  absolute">
                <i className="ri-add-line  text-[#21887a] mt-1 flex justify-center text-[30px]"></i>
              </div>
            </div>{" "}
            {/* row end */}
          </div>{" "}
          {/* col end */}
          <div className=" flex flex-col   mt-[12vh]  items-center">
            {" "}
            {/* col start*/}
            <div className=" flex flex-row items-center">
              <IoRemoveOutline className="text-white" size={44} />
              <div className="text-[29px]">The Best Coffee Ordering App</div>
            </div>
            <div
              className={`${pop.className} text-white font-semibold text-[10vh] leading-tight mt-7`}
            >
              Your Ultimate Coffee
              <br />
              <span className="ml-12">
                <u className="text-amber-200">Ordering</u> solution!
              </span>
            </div>
          </div>{" "}
          {/* col end */}
          {/* Circle image start */}
          <div className=" mr-[6rem] mt-[10vh] ">
            <Image
              src={"/coffee_circle.png"}
              alt={"coffee"}
              width={4000}
              height={100}
              className="size-32"
            />
          </div>
          {/* Circle image  end*/}
        </div>{" "}
        {/* row end */}
        {/* images start */}
        <div className="flex flex-row">
          <Image
            src={"/dot_lines.png"}
            alt={"spring"}
            height={100}
            width={4000}
            className="w-[14vh] h-[17vh] ml-[6rem] mt-[40vh]"
          />

          <div className="flex justify-center space-x-16">
            <Image
              src={"/screen1.png"}
              alt={"screen1"}
              height={100}
              width={4000}
              className="h-[76vh] mt-[15vh] w-[43vh]"
            />
            <Image
              src={"/screen2.png"}
              alt={"screen2"}
              height={100}
              width={4000}
              className="h-[83vh] mt-[4.4vh] w-[48vh]"
            />
            {/* screen3 container */}
            <div className="relative">
              <Image
                src={"/screen3.png"}
                alt={"screen3"}
                height={100}
                width={4000}
                className="h-[76vh] mt-[11.3vh] w-[43vh]"
              />
              {/* spring positioned relative to screen3 */}
              <Image
                src={"/pencil_spring.png"}
                alt={"spring"}
                height={100}
                width={4000}
                className="w-[18vh] h-[17vh] absolute top-[7vh] right-[-9vh]"
              />
            </div>
          </div>
        </div>
        {/* images end */}
      </div>
        </div>
    );
}
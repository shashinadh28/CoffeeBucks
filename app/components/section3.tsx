import { Raleway } from "next/font/google";
import Image from "next/image";
import { Rubik } from "next/font/google";
import { Poppins } from "next/font/google";


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
export default function Section3 (){
    return(
        <div>
        <div className="bg-gray-100 h-[95vh] w-full ">
          {/* row start */}
          <div className=" flex flex-row px-24  justify-between">
            {/* col start */}
            <div className=" flex flex-col mt-24  ">
              <div className=" flex flex-row items-center gap-3">
                <div className=" bg-gray-800 h-[2px] w-7  "> </div>
                <div
                  className={`${rubik.className} text-black font-normal text-[3.7vh]`}
                >
                  Benifits of Coffee Shop App
                </div>
              </div>
              <div className=" text-black font-bold text-[7vh]">
                {" "}
                <span className=" text-[#01816f] ">
                  {" "}
                  Exclusive Benifits{" "}
                </span>of <br /> Coffee Shop App{" "}
              </div>
            </div>
            {/* col end */}
            <div className=" flex flex-row items-center gap-3 px-[10px] mt-[18vh] ">
              <div className="bg-yellow-500 h-10 w-[3px] "></div>
              <div className=" text-gray-600 text-[18px]">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                dignissimos repellat, <br />
                temporibus quaerat beatae provident delectus quam asperiores
                veritatis i{" "}
              </div>
            </div>
          </div>{" "}
          {/* row end */}
          <div className=" flex flex-row gap-12  justify-center mt-14 ">
            {/* order tracking start */}
            <div className=" flex flex-col gap-3">
              <Image
                src={"/clock_timer.png"}
                alt={"timer"}
                height={100}
                width={100}
              />
              <div
                className={`${pop.className} text-black font-semibold text-xl`}
              >
                {" "}
                Order Tracking{" "}
              </div>
              <div className=" text-gray-700 w-[50vh] flex items-center">
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing Veritatis,
                distinctio perspiciatis. Voluptates necessitatibus, doloribus
                nesciunt{" "}
              </div>
            </div>
            {/* order tracking end */}
            {/* secure payments start */}
            <div className=" flex flex-col gap-3">
              <Image
                src={"/cloud_security.png"}
                alt={"timer"}
                height={100}
                width={100}
              />
              <div
                className={`${pop.className} text-black font-semibold text-xl`}
              >
                {" "}
                Secure Payments{" "}
              </div>
              <div className=" text-gray-700 w-[50vh] flex items-center">
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing Veritatis,
                distinctio perspiciatis. Voluptates necessitatibus, doloribus
                nesciunt{" "}
              </div>
            </div>
            {/*secure payments end */}

            {/* 24×7  start */}
            <div className=" flex flex-col gap-3">
              <Image
                src={"/contact_team.png"}
                alt={"timer"}
                height={100}
                width={100}
              />
              <div
                className={`${pop.className} text-black font-semibold text-xl`}
              >
                {" "}
                24×7 Support{" "}
              </div>
              <div className=" text-gray-700 w-[50vh] flex items-center">
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing Veritatis,
                distinctio perspiciatis. Voluptates necessitatibus, doloribus
                nesciunt{" "}
              </div>
            </div>
            {/*secure payments end */}
          </div>
        </div>
      </div>
    );
}
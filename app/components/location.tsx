import { Poppins } from "next/font/google";
import Image from "next/image";

const pop = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Specify weights
  subsets: ["latin"], // Specify subsets
  display: "swap",
});

export default function Location() {
  return (
    <div className="bg-[url('/black_design_bg.png')] bg-cover bg-center w-full h-[45rem]">
      {/* row start */}
      <div className="flex flex-row justify-between px-14  ">
        {/* col start  */}
        <div className="flex flex-col gap-3 mt-[10rem] ">
          <div className="flex flex-row  gap-4  items-center">
            <div className="bg-[#01816f] h-1 w-5"></div>
            <div className={`${pop.className}text-white text-[26px]`}>
              {" "}
              Best Features
            </div>
          </div>
          <div className=" text-[8vh] leading-tight font-bold ml-8">
            {" "}
            <span className=" text-[#30a596]">Key Features </span>of <br />{" "}
            Coffee Shop App
          </div>
        </div>
        {/*col end  */}

        <div className=" flex flex-col gap-4">
          {/* logo start */}
          <div>
            <Image
              src={"/coffee_circle.png"}
              alt={"coffee_circle "}
              width={4000}
              height={100}
              className="size-28 mt-[10rem] ml-[70vh]"
            />
          </div>
          {/* logo end */}

          <div className=" flex flex-row items-center gap-3 px-[10px]  ">
            <div className="bg-yellow-500 h-10 w-[3px] "></div>
            <div className=" text-white text-[18px] ">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              dignissimos repellat, <br />
              temporibus quaerat beatae provident delectus quam asperiores
              veritatis i{" "}
            </div>
          </div>
        </div>
      </div>
      {/* row end */}
      <div className=" flex flex-row  justify-evenly mt-20">
        <div className=" bg-white h-[41rem] w-[28rem] rounded-t-2xl">
          <div className=" flex flex-col gap-3 items-center">
            <div className=" font-semibold text-[30px] mt-8 text-black">
              Explore Nearby Cafe
            </div>
            <div className="px-7 text-gray-500 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum soluta sit, vero deserunt illo consequuntur
            </div>

            <Image
              src={"/location_screen_1.png"}
              alt={"screen1"}
              height={100}
              width={4000}
              className="h-[65vh] mt-[3.4vh] w-[40vh]"
            />
          </div>
        </div>
        <div className=" bg-white shadow-md h-[40rem] w-[28rem] rounded-t-2xl">
          <div className=" flex flex-col gap-3 items-center">
            <Image
              src={"/location_screen_2.png"}
              alt={"screen1"}
              height={100}
              width={4000}
              className="h-[65vh]  w-[40vh]"
            />
            <div className=" font-semibold text-[30px] mt-2 text-black">
              Explore Nearby Cafe
            </div>
            <div className="px-7 text-gray-500 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum soluta sit, vero deserunt illo consequuntur
            </div>
          </div>
        </div>
        <div className=" bg-green-300 h-[40rem] w-[28rem] rounded-t-2xl"> </div>
      </div>
    </div>
  );
}

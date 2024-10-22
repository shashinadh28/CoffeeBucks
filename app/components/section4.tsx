import { Raleway } from "next/font/google";
import Image from "next/image";


const rale = Raleway({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Specify weights
    subsets: ["latin"], // Specify subsets
    display: "swap",
  });
export default function Section4() {
    return (
        <div>
             <div className="bg-white h-[50rem] w-full">
        <div className=" flex flex-col  items-center">
          {/* row start */}
          <div className=" flex flex-row justify-center mt-8 items-center gap-3">
            <div className=" bg-gray-800 h-[2.3px] w-5 rounded-full"> </div>
            <div className="text-black font-medium text-[32px] ">
              {" "}
              How It Works
            </div>
          </div>
          {/* row end */}
          <div className="text-black font-bold text-[10vh] leading-tight ">
            {" "}
            <span className="text-[#01816f] ">Effortless Ordering:</span> A{" "}
            <br /> <span className=" flex justify-center">Quick Overview</span>
          </div>
        </div>

        <div className=" flex flex-row justify-between px-[30vh] mt-10 ">
          <Image
            src={"/coffee_girl_trim.png"}
            alt={"coffee_girl"}
            width={4000}
            height={100}
            className=" w-[44vh] ml-28 "
          />

          <div className=" flex flex-col">
            {/* Image 1 start */}
            <div className=" flex flex-row gap-7  mt-9  ">
              <Image
                src={"/profile.png"}
                alt={"sign-up"}
                width={4000}
                height={100}
                className=" w-[8vh] h-[8vh] mt-9 ml-[32px] "
              />
              {/* col start */}
              <div className=" flex flex-col mt-5">
                <div
                  className={`${rale.className} text-black font-semibold text-[40px] `}
                >
                  {" "}
                  Sign Up
                </div>
                <div className="text-gray-500 font-sans text-lg">
                  Easy 3 step Authentication{" "}
                </div>
              </div>
              {/* col end  */}
            </div>
            {/* image 1 end */}

            {/* image 2 start */}
            <div className=" flex flex-row gap-7   ">
              <Image
                src={"/order_placed.png"}
                alt={"sign-up"}
                width={4000}
                height={100}
                className=" w-[9vh] h-[8vh] mt-14 ml-[32px] "
              />
              {/* col start */}
              <div className=" flex flex-col mt-5">
                <div
                  className={`${rale.className} text-black font-semibold text-[40px] mr-40`}
                >
                  {" "}
                  Place Your Order
                </div>
                <div className="text-gray-500 font-sans text-lg">
                  &quot; Order your favorite coffee online and enjoy it <br /> from
                  the comfort of your home!&quot;{" "}
                </div>
              </div>
              {/* col end  */}
            </div>
            {/* Image 2  end */}
            {/* image 3 start */}
            <div className=" flex flex-row gap-7   ">
              <Image
                src={"/coffee_delivery.png"}
                alt={"sign-up"}
                width={4000}
                height={100}
                className=" w-[13vh] h-[9vh] mt-10 "
              />
              {/* col start */}
              <div className=" flex flex-col mt-5">
                <div
                  className={`${rale.className} text-black font-semibold text-[40px] mr-40`}
                >
                  {" "}
                  Order Delivered
                </div>
                <div className="text-gray-500 font-sans text-lg">
                &quot;Order your favorite coffee online and enjoy it <br /> from
                  the comfort of your home!&quot;{" "}
                </div>
              </div>
              {/* col end  */}
            </div>
            {/* Image 3  end */}
          </div>
        </div>
      </div>
        </div>
    );
  }
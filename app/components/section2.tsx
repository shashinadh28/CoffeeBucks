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
export default function Section2(){
    return(
        <div>
             <div className=" bg-white h-[40rem] w-full">
        {/* row start */}
        <div className=" flex flex-row  justify-between px-20 ">
          {/* col start */}
          <div className=" flex flex-col   leading-tight space-y-3">
            <div className="font-bold mt-40 text-black text-[7.5vh]">
              {" "}
              Download{" "}
              <span className=" text-[#1f887a]">
                Our Coffee <br /> Shop App
              </span>{" "}
              Today!
            </div>
            <div className=" text-gray-600 text-lg">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
              Iste nam corporis possimus voluptatum cum necessitatibus{" "}
            </div>
            {/* row start */}
            <div className="flex flex-row space-x-8 ">
              <div className=" flex flex-col mt-4">
                <div className="font-bold text-[#1f887a] text-[5.5vh]">
                  {" "}
                  5 Million+
                </div>
                <div className=" text-gray-600 text-lg">
                  Worldwide Active Users
                </div>
              </div>
              <div className=" bg-gray-500 bg-opacity-30  h-[60px] mt-4 w-[2px]">
                {" "}
              </div>
              <div className=" flex flex-col mt-4">
                <div className="font-bold text-[#1f887a] text-[5.5vh]">
                  {" "}
                  150+
                </div>
                <div className=" text-gray-600 text-lg">Countries</div>
              </div>
              <div className=" bg-gray-500 bg-opacity-30  h-[60px] mt-4 w-[2px]">
                {" "}
              </div>
              <div className=" flex flex-col mt-4">
                <div className="font-bold text-[#1f887a] text-[5.5vh]">
                  {" "}
                  7500+
                </div>
                <div className=" text-gray-600 text-lg">Vendors</div>
              </div>
            </div>
            {/* row end */}
          </div>{" "}
          {/* col end */}
          {/* apple start */}
          <div className="bg-gray-100 h-[38vh] w-[40vh] mt-[23vh] rounded-lg relative">
            <div className="flex flex-col ml-5">
              <div
                className={`${rubik.className} font-semibold text-black text-[4vh] leading-tight mt-5`}
              >
                For iOS{" "}
              </div>
              <div className="text-gray-500">iOS 15.6+</div>
              <div className="bg-[#01816f] h-[5.5vh] w-[20vh] rounded-full flex items-center justify-center mt-4">
                {" "}
                Download App{" "}
              </div>
              <div className="flex flex-row">
                <Image
                  src={"/qr.png"}
                  alt={"qr"}
                  width={100}
                  height={100}
                  className="mt-5"
                />
                <Image
                  src={"/apple.png"}
                  alt={"apple logo"}
                  width={100}
                  height={100}
                  className="absolute bottom-[-14px] right-[-10px]"
                />
              </div>
            </div>
          </div>{" "}
          {/* apple end */}
          {/* andriod start */}
          <div className="bg-gray-100 h-[38vh] w-[40vh] mr-28 mt-[23vh] rounded-lg relative">
            <div className="flex flex-col ml-5">
              <div
                className={`${rubik.className} font-semibold text-black text-[4vh] leading-tight mt-5`}
              >
                For Andriod{" "}
              </div>
              <div className="text-gray-500">Andriod 12.0+</div>
              <div className="bg-[#01816f] h-[5.5vh] w-[20vh] rounded-full flex items-center justify-center mt-4">
                {" "}
                Download App{" "}
              </div>
              <div className="flex flex-row">
                <Image
                  src={"/qr.png"}
                  alt={"qr"}
                  width={100}
                  height={100}
                  className="mt-5"
                />
                <Image
                  src={"/andriod.png"}
                  alt={"andriod logo"}
                  width={100}
                  height={100}
                  className="absolute bottom-[-14px] right-[-10px]"
                />
              </div>
            </div>
          </div>{" "}
          {/* andriod end */}
        </div>{" "}
        {/* row end */}
      </div>
        </div>
    );
}
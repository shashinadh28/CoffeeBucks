import Image from "next/image";
import "remixicon/fonts/remixicon.css";
import { Poppins } from "next/font/google";
import { Raleway } from "next/font/google";
import { Rubik } from "next/font/google";
import { IoRemoveOutline } from "react-icons/io5";
import Location from './components/location'

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

export default function Home() {
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
                Coffee Shop
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
      {/* section 1  */}
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
      {/* section 1  */}

      {/* section 2 */}
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
      {/* section 2 */}

      {/* section 3 */}
      <div className="bg-white h-[55rem] w-full">
        <div className=" flex flex-col  items-center">
          {/* row start */}
          <div className=" flex flex-row justify-center mt-24 items-center gap-3">
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

        <div className=" flex flex-row justify-between px-[30vh] mt-14 ">
          <Image
            src={"/coffee_girl_trim.png"}
            alt={"coffee_girl"}
            width={4000}
            height={100}
            className=" w-[40vh] ml-36  "
          />

          <div className=" flex flex-col">
            {/* Image 1 start */}
            <div className=" flex flex-row gap-7  mt-9  ">
              <Image
                src={"/profile.png"}
                alt={"sign-up"}
                width={4000}
                height={100}
                className=" w-[10vh] h-[10vh] mt-7 ml-[32px] "
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
                className=" w-[10vh] h-[9vh] mt-12 ml-[32px] "
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
                  "Order your favorite coffee online and enjoy it <br /> from
                  the comfort of your home!"{" "}
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
                className=" w-[15vh] h-[11vh] mt-8 "
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
                  "Order your favorite coffee online and enjoy it <br /> from
                  the comfort of your home!"{" "}
                </div>
              </div>
              {/* col end  */}
            </div>
            {/* Image 3  end */}
          </div>
        </div>
      </div>
      {/* section 3 */}

      {/* section 4 */}
      <Location />

      {/* section 4 */}

      {/* section 5  location_screen_2 */}
      <div className=" bg-white h-[50rem] w-full"> </div>
      {/* section 5 */}
    </div>
  );
}

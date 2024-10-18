import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white rounded-lg w-full shadow dark:bg-gray-900 ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
          <div className="bg-[#01816f] w-12 rounded-full flex justify-center">
                <i className="ri-drinks-fill text-white text-[2rem]"></i>
              </div>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CoffeeBucks</span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6 hover:text-[#74ddcf]">About</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6 hover:text-[#74ddcf]">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6 hover:text-[#74ddcf]">Licensing</a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-[#74ddcf]">Contact</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 <a href="https://flowbite.com/" className="hover:underline">CoffeeBucks™</a>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

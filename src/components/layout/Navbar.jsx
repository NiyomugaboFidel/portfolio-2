import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const menuItems = [
  { id: "home", label: "Home", path: "/home" },
  { id: "about", label: "About", path: "/about" },
  { id: "projects", label: "Projects", path: "/projects" },
  { id: "contacts", label: "Contacts", path: "/contacts" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleRoute = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownload = () => {
    console.log("Downloading...");
    toast.success("CV Downloading started.");
  };

  return (
    <div>
      {/* Desktop Navigation */}
      <div className=" relative flex lg:flex xl:flex  h-[10vh] w-full">
        <nav className=" relative bg-gray-200  lg:bg-transparent z-40 px-5 md:px-10 flex items-center justify-between w-full h-[60px]">
          <div className="logo">
            <strong className="bg-gray-300 text-black flex items-center border border-black p-1 rounded-md">
              <img
                className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
                src="/logo.svg"
                alt="Logo"
              />
              <span className="block ml-2">NI FIDELE</span>
            </strong>
          </div>
          <ul className=" hidden  lg:flex items-center space-x-4">
            {menuItems.map(({ id, label, path }) => (
              <li key={id} className="lg:px-[20px]">
                <Link
                  className="text-black font-semibold hover:text-gray-700"
                  to={path}
                  onClick={() => handleRoute(id)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="/FIDELE-CV.pdf"
              className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
              onClick={handleDownload}
              download
            >
              Download CV
            </a>
            <img
              className="w-[40px] h-[40px]"
              src="/img/github.svg"
              alt="GitHub"
            />
          </div>
          <div className="flex w-[40px] h-full items-center justify-end lg:hidden">
            <button
              onClick={toggleMenu}
              className=" p-1 w-full bg-gray-900 rounded-md border flex items-start justify-center transition-all ease-in-out duration-0"
            >
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-gray-100 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-gray-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>
        <div
          className={` ${isOpen ? 'top-[110%]' : 'top-[-700px]'} transition-all duration-500 ease-in-out h-full px-2 py-4 min-h-[400px] text-white   absolute  flex lg:hidden flex-col gap-[6px] items-center justify-start w-full  bg-gray-900 z-20`}
        >
          <ul className="flex flex-col gap-2 lg:hidden justify-start items-start w-full  ">
            {menuItems.map(({ id, label, path }) => (
              <li
                key={id}
                className=" hover:bg-gray-500 lg:px-[20px]  border border-gray-100 rounded-lg w-full p-2  "
              >
                <Link
                  className="text-white font-semibold hover:text-gray-200"
                  to={path}
                  onClick={() => handleRoute(id)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 justify-start w-full h-full items-start lg:hidden ">
            <a
              href="/FIDELE-CV.pdf"
              className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 border"
              onClick={handleDownload}
              download
            >
              Download CV
            </a>
            <button className="w-full bg-black rounded-lg p-1 border ">
              <img
                className="w-[30px] h-[30px] bg-white overflow-hidden rounded-full"
                src="/img/github.svg"
                alt="GitHub"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

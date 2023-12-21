// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import ToggleSwitch from "./ToggleSwitch";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = ({ sections }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);

    const container = document.getElementById("app-container");

    if (isDarkTheme) {
      container.classList.remove("dark-theme");
      container.classList.add("light-theme");
    } else {
      container.classList.remove("light-theme");
      container.classList.add("dark-theme");
    }
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <div
      className={`flex flex-row md:flex-row justify-between items-center px-2 md:px-8 py-3 md:py-5 ${
        isDarkTheme ? "dark-theme" : "light-theme"
      } bg-slate-50 border-b-2 border-indigo-100`}
    >
      <div className="nav-logo text-3xl md:text-5xl  md:mb-0 items-center">
        <Link to={"/"}>Akash V</Link>
      </div>

      <div className="hidden md:flex flex-wrap items-center gap-x-7">
        {sections.map((section) => (
          <Link
            key={section.id}
            to={section.id}
            // className="mb-2 md:mb-0 md:ml-4 text-lg font-medium "
            className={`mt-4 text-lg mb-2 md:mb-0 md:ml-4  font-medium nav-link ${
              location.pathname === `/${section.id}` ? "active" : ""
            }`}
          >
            {section.section}
          </Link>
        ))}
        <hr className="w-[1px] bg-slate-400 h-8" />
        {/* <ToggleSwitch isDarkTheme={isDarkTheme} onToggle={toggleTheme} /> */}
        <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-xl">
          Download CV
        </button>
      </div>

      <div className="flex flex-row gap-x-5 items-center md:hidden">
        {/* <ToggleSwitch isDarkTheme={isDarkTheme} onToggle={toggleTheme} /> */}
        <button onClick={toggleSidebar} className="relative w-10 h-10">
          {showSidebar ? (
            <IoMdClose className="text-3xl text-red-400 bg-transparent" />
          ) : (
            <IoMdMenu className="text-3xl text-green-500 bg-transparent" />
          )}
        </button>
      </div>

      <div className={`sidebar ${showSidebar ? "active" : ""} md:hidden`}>
        <div className="nav-logo text-5xl md:text-5xl mb-7 mt-5 flex items-center justify-center text-slate-100">
          Akash V
        </div>
        <div className="flex flex-wrap flex-col items-center gap-y-5 overflow-y-scroll">
          {sections.map((section) => (
            <Link
              key={section.id}
              to={section.id}
              className={`mt-4 text-lg text-white nav-link ${
                location.pathname === `/${section.id}` ? "active" : ""
              }`}
              onClick={closeSidebar}
            >
              {section.section}
            </Link>
          ))}
          <hr className="w-full bg-slate-400 h-[2px]" />
          <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-xl">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useContext } from "react";
import logo from "../assets/img/quranlogo.svg";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import { DarkMode } from "../context/ThemeContext";

export const Header = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const handleCheckboxChange = (e) => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("isDarkMode", !isDarkMode);
  };
  return (
    <div
      className={`flex justify-between pt-3 ${
        isDarkMode ? "bg-[#1F1F1F]" : "bg-white"
      }`}
    >
      <img
        src={logo}
        alt="quran logo"
        onClick={() => (window.location.href = "/")}
        className="hover:cursor-pointer w-[80px]"
      />

      <div className="relative h-8 w-16">
        <input
          checked={isDarkMode}
          onChange={handleCheckboxChange}
          id="checkbox"
          type="checkbox"
          className="absolute opacity-0"
        />
        <label
          htmlFor="checkbox"
          className="flex px-1 bg-black rounded-2xl justify-between gap-1 h-full w-full items-center "
        >
          <BsMoonStarsFill color="white" className="w-1/2" />
          <BsFillSunFill color="yellow" className="w-1/2" />
          <div
            className={`switcher bg-white h-full w-1/2 absolute rounded-2xl duration-300`}
          ></div>
        </label>
      </div>
    </div>
  );
};

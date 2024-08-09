import React from "react";
import logo from '../assets/img/quranlogo.svg'

export const Header = () => {
  return (
    <div className="flex justify-between pt-3">
      <img src={logo} alt="quran logo"
        onClick={() => (window.location.href = "/")}
        className="hover:cursor-pointer"
      />
      
      <div><input type="checkbox"/></div>
    </div>
  );
};

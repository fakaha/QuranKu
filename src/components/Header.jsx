import React from "react";

export const Header = () => {
  return (
    <div>
      <h1
        onClick={() => (window.location.href = "/")}
        className="text-center text-2xl font-bold text-[#004B40] my-3 hover:cursor-pointer"
      >
        QuranKu
      </h1>
      <div><input type="text" /></div>
    </div>
  );
};

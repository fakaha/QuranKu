import React from "react";

export const ListSurah = (props) => {
  return (
    <div className="flex w-[26%] items-center justify-between">
      <div className="flex justify-center items-center gap-2">
        <p className="flex text-[#fff] justify-center items-center bg-[#87D1A4] w-[36px] h-[36px] rounded-lg">
          {props.dataParent.number}
        </p>
        <div className="flex flex-col">
          <p>{props.dataParent.englishName}</p>
          <p className="">{props.dataParent.englishNameTranslation}</p>
        </div>
      </div>
      <p className="text-[#076C58] font-bold">{props.dataParent.name}</p>
    </div>
  );
};

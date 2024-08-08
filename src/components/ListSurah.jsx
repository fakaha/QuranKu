import React from "react";

export const ListSurah = (props) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex justify-center items-center gap-2">
        <p className="flex text-[#fff] justify-center items-center bg-[#87D1A4] w-[36px] h-[36px] rounded-lg">
          {props.dataParent.number}
        </p>
        <div className="flex flex-col">
          <p>{props.dataParent.englishName}</p>
          <div className="flex text-xs">
            <p>{props.dataParent.englishNameTranslation}&nbsp;</p>
            <p>({props.dataParent.numberOfAyahs})</p>
          </div>
        </div>
      </div>
      <p className="text-[#076C58] font-bold">{props.dataParent.name}</p>
    </div>
  );
};

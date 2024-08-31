import React from "react";

export const ListDetailSurah = (props) => {
  return (
    <div
      className={`rounded-lg flex flex-col gap-3 w-11/12 lg:w-1/2 p-3 bg-[#87D1A4]`}
    >
      <p>Ayat {props.dataParent.nomorAyat}</p>
      <p className="text-end">{props.dataParent.teksArab}</p>
      <p>{props.dataParent.teksLatin}</p>
      <p>{props.dataParent.teksIndonesia}&nbsp;</p>
    </div>
  );
};

import React from "react";
import { useNavigate } from "react-router-dom";

export const ListSurah = (props) => {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`/detail-surat/${props.dataParent.nomor}`)} className="group flex items-center justify-between hover:cursor-pointer bg-[#F5F5DC] rounded-lg p-2 hover:bg-[#87D1A4] hover:text-[#fff]">
      <div className="flex justify-center items-center gap-2">
        <p className="flex text-[#fff] justify-center items-center bg-[#87D1A4] w-[36px] h-[36px] rounded-lg">
          {props.dataParent.nomor}
        </p>
        <div className="flex flex-col">
          <p>{props.dataParent.namaLatin}</p>
          <div className="flex text-xs">
            <p>{props.dataParent.arti}&nbsp;</p>
            <p>({props.dataParent.jumlahAyat})</p>
          </div>
        </div>
      </div>
      <p className="font-bold">{props.dataParent.nama}</p>
    </div>
  );
};

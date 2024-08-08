import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDetailSurah } from "../services/SurahServices";
import { ListDetailSurah } from "../components/ListDetailSurah";

export const DetailSurah = () => {
  const { id } = useParams();
  const [surahDetail, setSurahDetail] = useState([]);
  useEffect(() => {
    fetchDetailSurah(id, (data) => {
      setSurahDetail(data);
    });
  }, [id]);
  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#87D1A4] w-screen text-center py-3">
        <h1>{surahDetail.nama}</h1>
        <h1>{surahDetail.namaLatin}</h1>
        <div className="flex justify-center">
          <p>{surahDetail.tempatTurun}</p>
          <p>&nbsp;({surahDetail.jumlahAyat})</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 items-center my-8">
        {surahDetail?.ayat?.map((data) => (
          <ListDetailSurah key={data.nomorAyat} dataParent={data} />
        ))}
      </div>
    </div>
  );
};

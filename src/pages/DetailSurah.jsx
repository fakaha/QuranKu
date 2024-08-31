import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDetailSurah } from "../services/SurahServices";
import { ListDetailSurah } from "../components/ListDetailSurah";
import { Header } from "../components/Header";
import { DarkMode } from "../context/ThemeContext";

export const DetailSurah = () => {
  const { id } = useParams();
  const [surahDetail, setSurahDetail] = useState([]);
  const {isDarkMode} = useContext(DarkMode)
  useEffect(() => {
    fetchDetailSurah(id, (data) => {
      setSurahDetail(data);
    });
  }, [id]);
  return (
    <div className={`pb-8 lg:px-12 px-8 flex flex-col ${isDarkMode ? 'bg-[#1F1F1F]' : 'bg-white'}`}>
      <Header/>
      <div className={`text-center my-3 ${isDarkMode ? 'text-white' : 'text-black'}`}>
        <h1>{surahDetail.nama}</h1>
        <h1>{surahDetail.namaLatin}</h1>
        <div className="flex justify-center">
          <p>{surahDetail.tempatTurun}</p>
          <p>&nbsp;({surahDetail.jumlahAyat})</p>
        </div>
      </div>
      <p className="w-11/12 lg:w-1/2 p-3 bg-[#87D1A4] rounded-lg mt-10 mx-auto">{surahDetail?.deskripsi?.replace(/<\/?i>/g, '')}</p>
      <div className="flex flex-col gap-3 items-center my-8">
        {surahDetail?.ayat?.map((data) => (
          <ListDetailSurah key={data.nomorAyat} dataParent={data} />
        ))}
      </div>
    </div>
  );
};

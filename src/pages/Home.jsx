import React, { useEffect, useState } from "react";
import { fetchSurah } from "../services/SurahServices";
import { ListSurah } from "../components/ListSurah";

export const Home = () => {
  const [Surah, setSurah] = useState([]);
  useEffect(() => {
    fetchSurah((data) => {
      setSurah(data);
    });
  }, []);
  return (
    <div className="py-8 px-12">
      <h1 onClick={() => window.location.href = '/'} className="text-center text-2xl font-bold text-[#004B40] my-3 hover:cursor-pointer">
        QuranKu
      </h1>
      <input className="border-[#333] border-2 rounded-lg px-2 py-1" type="text" placeholder="Search Surah" />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3">
        {Surah.map((result) => (
          <ListSurah key={result.nomor} dataParent={result}/>
        ))}
      </div>
    </div>
  );
};

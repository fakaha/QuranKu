import React, { useEffect, useState } from 'react'
import { fetchSurah } from '../services/SurahServices'
import { ListSurah } from '../components/ListSurah'

export const Home = () => {
    const [Surah, setSurah] = useState([])
    useEffect(() => {
        fetchSurah((data) => {
            setSurah(data)
        });
    }, [])
  return (
    <div className='p-8'>
      <h1 className='text-center text-2xl font-bold text-[#004B40] my-3'>QuranKu</h1>
      <div className='flex flex-wrap gap-6 justify-center'>
        {Surah.map((result) => (
            <ListSurah key={result.number} dataParent={result}/>
        ))}
      </div>
    </div>
  )
}

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
      <h1 className='text-center text-2xl'>QuranKu</h1>
      <div className='flex flex-wrap gap-3 justify-center'>
        {Surah.map((result) => (
            <ListSurah key={result.number} dataParent={result}/>
        ))}
      </div>
    </div>
  )
}

import React from 'react'
import { genres } from '../assets/constants'
import Card from './Card';
import { useGetInfosQuery } from '../redux/apiCalls'

const MusicList = () => {
    const { data, isFetching, error } = useGetInfosQuery();

    console.log(data);
    
    const dummyData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div className='flex flex-col gap-2 bg-slate-800 text-white'>
            <div className='flex justify-between gap-5 px-10 py-5'>
                <h1 className='text-3xl font-bold'>Discover</h1>
                <select className='border-1 rounded-md text-lg p-2 font-medium' name="genges" id="genges">
                    {genres.map((item) => (
                        <option className='bg-slate-800' value={item.value} key={item.value}>{item.title}</option>
                    ))}
                </select>
            </div>

            <div className='flex flex-wrap gap-10 px-10 justify-center'>
                {dummyData.map((item) => (
                    <Card key={item} />
                ))}
            </div>
        </div>
    )
}

export default MusicList

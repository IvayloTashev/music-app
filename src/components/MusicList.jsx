import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useGetSearchQuery } from '../redux/apiCalls';
import { Link } from 'react-router-dom';

const MusicList = () => {
    const [search, setSearch] = useState('');
    const { data, isFetching, error } = useGetSearchQuery(search);

    return (
        <div className='flex flex-col gap-2 bg-slate-800 text-white h-screen'>
            <div className='flex flex-col items-center gap-5 px-10 py-5'>
                <h1 className='text-3xl font-bold'>Discover</h1>
                {/* <select className='border-1 rounded-md text-lg p-2 font-medium' name="genges" id="genges">
                    {genres.map((item) => (
                        <option className='bg-slate-800' value={item.value} key={item.value}>{item.title}</option>
                    ))}
                </select> */}
                <div className='flex items-center border-1 border-red-400 rounded-xl p-1'>
                    <SearchIcon className=''/>
                    <input className='rounded-sm p-1 focus:outline-0 text-red-400' type="text" name='search' onChange={(e) => setSearch(e.target.value)} />
                </div>
            </div>

            <div className='flex flex-wrap gap-4 justify-center'>
                {data?.data?.map((item) => (
                    <>
                        <Link to={`/details/${item.id}`} className='h-90 py-3 px-2 basis-1/6 bg-slate-700' key={item.id}>
                            <div className='flex flex-col gap-1 justify-center items-center'>
                                <img src={item?.album.cover_big} alt="cover" className='object-cover w-70 rounded-xl hover:opacity-30' />
                                <h3 className='font-bold truncate w-65'>{item.title}</h3>
                                <h4 className='truncate w-65'>{item.artist.name}</h4>
                            </div>
                        </Link>
                    </>
                ))}
            </div>
        </div>
    )
}

export default MusicList

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
                        <Link to={`/details/${item.id}`} className='h-60 py-2 basis-1/6 bg-slate-700 rounded-md' key={item.id}>
                            <div className='flex flex-col gap-1.5 justify-center items-center'>
                                <h3 className='font-bold text-center truncate w-65'>{item.album.title}</h3>
                                <img src={item?.album.cover_big} alt="cover" className='object-cover h-40 rounded-xl' />
                                <h3 className='text-center truncate w-50'>{item.title}</h3>
                            </div>
                        </Link>
                    </>
                ))}
            </div>
        </div>
    )
}

export default MusicList

import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useGetSearchQuery } from '../redux/apiCalls';
import { Link } from 'react-router-dom';

const MusicList = () => {
    const [search, setSearch] = useState('');
    const { data, isFetching, error } = useGetSearchQuery(search);

    return (
        <section className="flex flex-col gap-6 bg-gradient-to-b from-slate-900 to-slate-800 text-white py-12 px-6 shadow-lg h-620">
            <div className="flex flex-col items-center gap-6">
                <h1 className="text-4xl font-extrabold tracking-wide">Discover</h1>
                <div className="flex items-center gap-2 border border-red-400 rounded-full px-4 py-2 bg-slate-700 shadow-md transition-all duration-300 focus-within:ring-2 focus-within:ring-red-400">
                    <SearchIcon className="text-red-400" />
                    <input
                        type="text"
                        name="search"
                        className="bg-transparent outline-none text-red-300 placeholder-red-500 w-60"
                        placeholder="Search music..."
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center py-6">
                {data?.data?.map((item) => (
                    <Link
                        to={`/details/${item.id}`}
                        className="relative bg-slate-700 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        key={item.id}
                    >
                        <img
                            src={item?.album.cover_big}
                            alt="cover"
                            className="object-cover w-full rounded-t-xl transition-opacity duration-300 hover:opacity-60"
                        />
                        <div className="p-3 flex flex-col items-center text-center">
                            <h3 className="font-bold truncate w-full">{item.title}</h3>
                            <h4 className="text-sm text-gray-300 truncate w-full">{item.artist.name}</h4>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default MusicList

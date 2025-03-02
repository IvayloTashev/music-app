import React from 'react'
import Navbar from '../components/Navbar'
import { useGetTrackQuery } from '../redux/apiCalls'
import { useParams } from 'react-router'
import MusicPlayer from '../components/MusicPlayer'

const details = () => {
    const { id } = useParams();
    const { data, isFetching, error } = useGetTrackQuery(id)

    if (isFetching) {
        return (
            <div className="flex items-center justify-center h-screen text-white">
                <p>Loading...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center h-screen text-white">
                <p>Something went wrong. Try again later.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
            <Navbar />
            <div className="flex justify-center items-center flex-col container mx-auto px-6 py-10">
                <h2 className="text-4xl font-extrabold text-center mb-10 tracking-wide">
                    Track Details
                </h2>

                <div className="flex flex-col lg:flex-row items-center gap-12 bg-slate-800 p-8 rounded-2xl shadow-lg w-[1250px]">
                    <div className="flex-shrink-0">
                        <img
                            src={data?.album.cover_big}
                            alt="cover_img"
                            className="w-80 h-80 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105"
                        />
                    </div>

                    <div className="flex flex-col gap-4 text-lg w-full">
                        <p><span className="font-semibold text-red-400">Song:</span> {data?.title}</p>
                        <p><span className="font-semibold text-red-400">Artist:</span> {data?.artist.name}</p>
                        <p><span className="font-semibold text-red-400">Album:</span> {data?.album.title}</p>
                        <p><span className="font-semibold text-red-400">Released:</span> {data?.album.release_date}</p>

                        <div>
                            <MusicPlayer previewUrl={data?.preview} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default details

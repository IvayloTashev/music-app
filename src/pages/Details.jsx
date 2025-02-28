import React from 'react'
import Navbar from '../components/Navbar'
import { useGetTrackQuery } from '../redux/apiCalls'
import { useParams } from 'react-router'

const details = () => {
    const { id } = useParams();
    const { data, isFetching, error } = useGetTrackQuery(id)

    console.log(data);


    return (
        <div className='bg-slate-700 h-screen'>
            <Navbar />
            <h2 className='text-3xl text-white font-bold mb-10 text-center mt-5'>Detailed information</h2>
            <div className='text-white flex flex-wrap justify-center items-center my-20 mx-40 py-5 px-10 bg-slate-800 rounded-2xl'>
                <div className='flex-1 h-full flex flex-col gap-1'>
                    <p>Song: {data?.title}</p>
                    <p>Band/Singer: {data?.artist.name}</p>
                    <p>Album: {data?.album.title}</p>
                    <p>Released: {data?.album.release_date}</p>
                    <div className='mt-5'>
                        Track sample
                    </div>
                </div>

                <div className='flex-1 flex justify-center items-center'>
                    <img src={data?.album.cover_big} alt="cover_img" className='h-90 w-90 rounded-bl-4xl rounded-tr-4xl' />
                </div>
            </div>

        </div>
    )
}

export default details

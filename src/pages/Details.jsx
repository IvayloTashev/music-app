import React from 'react'
import Navbar from '../components/Navbar'
import { useGetTrackQuery } from '../redux/apiCalls'
import { useParams } from 'react-router'

const details = () => {
    const {id} = useParams();
    const { data, isFetching, error } = useGetTrackQuery(id)

    console.log(data);
    

    return (
        <div className='bg-slate-700 h-screen'>
            <Navbar />
            Details
        </div>
    )
}

export default details

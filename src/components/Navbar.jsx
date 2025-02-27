import React from 'react'
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import TagIcon from '@mui/icons-material/Tag';
import HeadsetIcon from '@mui/icons-material/Headset';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center bg-slate-800 text-white py-2 px-10'>
            <div>
                <Link to={'/'}>
                    <img className='h-10 w-10' src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Apple_Music_icon.svg" alt="" />
                </Link>
            </div>

            <div className='flex gap-10 text-lg font-medium hover'>
                <Link className='hover:text-red-400'><HomeIcon /> Home</Link>
                <Link className='hover:text-red-400'><HeadsetIcon /> Around You</Link>
                <Link className='hover:text-red-400'><StarIcon /> Top Artists</Link>
                <Link className='hover:text-red-400'><TagIcon /> Top Charts</Link>
            </div>

            <div className='flex gap-2 items-center'>
                <SearchIcon />
                <input type="text" placeholder='Search' className='border rounded-sm p-1 focus:outline-0' />
            </div>
        </div>
    )
}

export default Navbar

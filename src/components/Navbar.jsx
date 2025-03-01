import React from 'react'
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-3 px-12 shadow-md">
        <div className="flex justify-center items-center max-w-5xl mx-auto text-3xl">
            <Link 
                to={"/"} 
                className="flex items-center gap-2 text-lg font-semibold transition-all duration-300 hover:text-red-400"
            >
                <HomeIcon className="text-red-400 transition-transform duration-300 hover:scale-110" />
                <span>Search</span>
            </Link>
        </div>
    </nav>
    )
}

export default Navbar

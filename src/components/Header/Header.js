import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="menubar bg-green-500 p-5 flex items-center content-center">
                <h1 className='ml-10 font-bold mr-80 text-4xl text-rose-600 '>Test Shop Website</h1>
                <div className='flex items-end'>
                    <Link to='/' activeClassName='ActiveLink' className=' mx-8 text-2xl text-white font-semibold hover:text-red-600' href="">Home</Link>
                    <Link to='/friends' activeClassName='ActiveLink' className=' mx-8 text-2xl text-white font-semibold hover:text-red-600' href="">Friends</Link>
                    <Link to='/posts' activeClassName='ActiveLink' className=' mx-8 text-2xl text-white font-semibold hover:text-red-600' href="">Posts</Link>
                    <Link to='/about' activeClassName='ActiveLink' className=' mx-8 text-2xl text-white font-semibold hover:text-red-600' href="">About</Link>
                    <Link to='/' activeClassName='ActiveLink' className=' mx-8 text-2xl text-white font-semibold hover:text-red-600' href="">Contact</Link>                  
                </div>
            </div>

        </div>
    );
};

export default Header;
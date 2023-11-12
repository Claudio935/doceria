import React, { useState } from 'react';
import NavbarModal from './modal';
import { useLocation, useNavigate } from 'react-router-dom';
import { } from '../../'


const Navbar = () => {
    const [openModal, setOpenModal] = useState(false)
    const navigation = useNavigate()
    const location = useLocation();

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const logo = require('../../assets/image/logo.png')

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const home = require('../../assets/icones/home.png')

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const cart = require('../../assets/icones/cart.png')


    return (
        <nav className='fixed h-20 top-0 left-0 z-10 w-full bg-white p-5 flex items-center justify-between flex-row shadow-md shadow-red-400'>
            <NavbarModal open={openModal} />
            <img src={logo} className='h-12' />
            <div className='flex-1 '>
                {location.pathname === '/' &&

                    <div className='flex items-center justify-end'>
                        <button
                            onClick={() => setOpenModal((open) => !open)}
                            data-collapse-toggle="navbar-default"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                        <div className='w-auto flex justify-end items-center'>
                            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                    <li>
                                        <a href="#" className="block py-2 pl-3 pr-4 text-red-400 hover:text-blue-400">inicío</a>
                                    </li>
                                    <li>
                                        <a href="#menu" className="block py-2 pl-3 pr-4  text-red-400 hover:text-blue-400">Cardápio</a>
                                    </li>
                                    <li>
                                        <a href="#feedback" className="block py-2 pl-3 pr-4 text-red-400 hover:text-blue-400">FeedBack</a>
                                    </li>
                                    <li>
                                        <a href="#galeria" className="block py-2 pl-3 pr-4 text-red-400 hover:text-blue-400">Galeria</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                }
            </div>
            {location.pathname !== '/cart' ? <button
                className='rounded-full bg-red-400 h-[40px] w-[40px] flex items-center justify-center hover:bg-red-500'
                onClick={() => navigation('/cart')}>
                <img src={cart} className='h-[20px] mx-10' />
            </button> : <button
                className='rounded-full bg-red-400 h-[40px] w-[40px] flex items-center justify-center hover:bg-red-500'
                onClick={() => navigation('/')}>
                <img src={home} className='h-[20px] mx-10' />
            </button>}



        </nav>
    );
}

export default Navbar;
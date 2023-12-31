import React from 'react';
import Header from './header';
import Menu from './menu';
import Navbar from '../../components/navbar';
import Feedback from './feedback';
import Gallery from './Gallery';


const Home = () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const whatsapp = require('../../assets/icones/whatsapp.png')

    console.log(process.env.REACT_APP_API_KEY)
    return (
        <div className='p-7 bg-pack-train bg-no-repeat bg-cover bg-center w-full'>
            <Navbar />
            <Header />
            <div className='mt-7 ' id="menu">

                <Menu />
            </div>
            <div className='mt-7 py-32' id="feedback">
                <h1
                    className='
                text-center 
                text-black 
                font-dancing 
                text-5xl 
                font-bold
                '>Feedback de nossos Clientes</h1>
                <Feedback />
            </div>
            <div className='mt-7' id="galeria">
                <Gallery />
            </div>
            <a href='http://api.whatsapp.com/send?1=pt_BR&phone=5571981379605'>
                <img src={whatsapp} className='w-10 h-10 fixed right-2 bottom-5 cursor-pointer' />
            </a>

        </div>
    );
}

export default Home;

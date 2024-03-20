import React from 'react';

import Menu from './menu';
import Navbar from '../../components/navbar';
import Feedback from './feedback';
import CardProduct from './card';
import Footer from './footer';
import FaleConosco from './faleConosco';



const Home = () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const whatsapp = require('../../assets/icones/whatsapp.png')





    return (
        <div className='pt-20 bg-no-repeat bg-cover bg-center w-full '>
            <Navbar />
            <div className='grid grid-cols-1 gap-28'>
                <div id="menu" className='md:px-20 px-10 mt-[20px]'>

                    <Menu />
                </div>
                <div className='md:px-20 px-10'>
                    <h1 className='font-bold text-5xl  font-dancing text-center mb-5'>
                        Os mais vendidos!</h1>
                    <CardProduct />
                </div>


                <div className='md:px-20 px-10 ' id="fale-conosco">
                    <FaleConosco />
                </div>
                <div id="feedback" >
                    <h1
                        className='
                text-center 
                text-black 
                font-dancing 
                text-5xl 
                font-bold
                mb-5
               
                '>Feedback de nossos Clientes</h1>
                    <Feedback />
                </div>

                <Footer />


            </div>
            <a href='http://api.whatsapp.com/send?1=pt_BR&phone=5571981379605'>
                <img src={whatsapp} className='w-10 h-10 fixed right-2 bottom-5 cursor-pointer' />
            </a>
        </div>
    );
}

export default Home;

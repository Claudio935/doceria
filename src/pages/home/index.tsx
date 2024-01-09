import React from 'react';
import Header from './header';
import Menu from './menu';
import Navbar from '../../components/navbar';
import Feedback from './feedback';
import Gallery from './Gallery';


const Home = () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const whatsapp = require('../../assets/icones/whatsapp.png')
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const footerLogo = require('../../assets/image/footerLogo.png')
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const instagram = require('../../assets/icones/instagram.png')

    console.log(process.env.REACT_APP_API_KEY)
    return (
        <div className='pt-7 bg-pack-train bg-no-repeat bg-cover bg-center w-full'>
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
            <footer className='w-full md:h-128 bg-red-500 px-10 py-5 md:py-0'>
                <div className='grid md:grid-cols-2 grid-cols-1 h-full w-full gap-4'>
                    <div className='flex flex-col justify-center items-center h-full w-full'>
                        <img src={footerLogo} className='w-80 h-128' />
                    </div>


                    <div className='flex flex-col justify-center items-center h-full w-full gap-8 '>
                        <div className='flex flex-col justify-center items-center gap-2 '>
                            <h1 className='
                        text-[#3BBEBF]
                        font-dancing 
                        font-bold 
                        text-4xl'>Redes Sociais</h1>
                            <div className='flex flex-row items-center justify-start gap-2'>
                                <img src={instagram} className='h-5 w-5 ' />
                                <h5 className='
                        text-white 
                        font-dancing 
                        font-bold 
                        text-2xl'>nikkis.confeitaria</h5>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-2'>
                            <h1 className='
                       text-[#3BBEBF]
                        font-dancing 
                        font-bold 
                        text-4xl'>Endereço:</h1>
                            <h5 className='
                        text-white 
                        font-dancing 
                        font-bold 
                        text-2xl'>Avenida das Luzes , nº 89, Ribeira</h5>
                        </div>
                    </div>
                </div>

            </footer>

        </div>
    );
}

export default Home;

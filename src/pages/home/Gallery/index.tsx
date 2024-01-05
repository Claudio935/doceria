import React from 'react';

const Gallery = () => {

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const boloBahia = require('../../../assets/image/boloBahia.png')
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const boloBarbie = require('../../../assets/image/boloBarbie.png')
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const boloDoces = require('../../../assets/image/boloDoces.png')
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const boloKaraoke = require('../../../assets/image/boloKaraoke.png')
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const boloSuper = require('../../../assets/image/boloSuper.png')
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const boloTiktok = require('../../../assets/image/boloTiktok.png')



    return (
        <div
            className="
        animate-fade-in
        flex  
        justify-center   
        flex-wrap 
        px-2 
        py-10 
        md:m-20 
        m-5 
        rounded-lg 
        bg-white  
        items-center">
            <div className='  w-4/5'>
                <h1
                    className="
                text-4xl 
                text-black 
                font-bold   
                text-center 
                mb-5 
                w-full 
                font-dancing">Galeria</h1>
                <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
                    <img
                        src={boloBahia}
                        className='w-32 h-32 md:w-64 md:h-52 rounded-lg hover:scale-150' />
                    <img
                        src={boloBarbie}
                        className='w-32 h-32 md:w-64 md:h-52 rounded-lg hover:scale-150' />
                    <img
                        src={boloDoces}
                        className='w-32 h-32 md:w-64 md:h-52 rounded-lg hover:scale-150' />
                    <img
                        src={boloKaraoke}
                        className='w-32 h-32 md:w-64 md:h-52 rounded-lg hover:scale-150' />
                    <img
                        src={boloSuper}
                        className='w-32 h-32 md:w-64 md:h-52 rounded-lg hover:scale-150' />
                    <img
                        src={boloTiktok}
                        className='w-32 h-32 md:w-64 md:h-52 rounded-lg hover:scale-150' />
                </div>

            </div>
        </div>
    );
}

export default Gallery;
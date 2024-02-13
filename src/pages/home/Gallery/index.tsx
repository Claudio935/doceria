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








    return (
        <div
            className="
        animate-fade-in
        flex  
        justify-center   
        flex-wrap
        rounded-lg
        items-center
        bg-red-400
        p-4
        ">
            <div className='w-full flex items-center justify-center flex-col md:flex-row gap-20'>
                <div className=' flex items-center justify-center flex-col w-full'>
                    <h1
                        className="
                text-4xl 
                text-white 
                font-bold   
                text-center 
                w-full 
                font-dancing
                mb-5
                ">Sabores Encantadores: Uma Jornada Culinária Inesquecível
                        com Nossa Receita Exclusiva!</h1>
                    <p className='
                font-dancing 
                font-medium 
                text-white
                text-2xl 
                text-center 
                mb-5'>Na nossa doceria, cada receita é uma história de amor
                        contada pelos sabores irresistíveis que criamos. Das texturas
                        suaves aos sabores intensos, mergulhe em um universo de delícias
                        únicas que tornam cada visita uma experiência memorável. Descubra o
                        encanto de nossa variedade de doces artesanais, onde cada mordida é uma
                        celebração do prazer culinário. Deixe-nos ser a doce melodia em seu paladar,
                        transformando cada momento em uma verdadeira festa para os sentidos.</p>
                </div>
                <div className='flex flex-row w-full items-center justify-center gap-4'>
                    <div className='
                    grid 
                    grid-cols-2 
                    md:grid-cols-3 
                    gap-2
                    items-center 
                    justify-items-start'>


                        <img
                            src={boloBahia}
                            className='
                            w-full 
                            h-w-full 
                            md:w-full 
                            md:h-w-full 
                            rounded-lg 
                            row-span-2
                            ' />
                        <img
                            src={boloBarbie}
                            className='
                            w-full 
                            h-w-full 
                            md:w-full 
                            md:h-w-full  
                            rounded-lg 
                            row-span-3' />
                        <img
                            src={boloKaraoke}
                            className='
                            w-full 
                            h-w-full 
                            md:w-full 
                            md:h-w-full 
                            rounded-lg 
                            row-span-2' />
                        <img
                            src={boloDoces}

                            className='w-full h-w-full md:w-full md:h-w-full rounded-lg' />
                        <img
                            src={boloSuper}
                            className='
                            w-full 
                            h-w-full 
                            md:w-full 
                            md:h-w-full 
                            row-span-2 
                            rounded-lg' />


                    </div>
                    <div className='flex flex-col items-center justify-center gap-2'>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
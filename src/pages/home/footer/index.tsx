

const Footer = () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const footerLogo = require('../../../assets/image/footerLogo.png')
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const instagram = require('../../../assets/icones/instagram.png')

    return (
        <footer className='w-full md:h-128 bg-red-500 px-10 py-5 md:py-0'>
            <div className='grid md:grid-cols-2 grid-cols-1 h-full w-full gap-4'>
                <div className='
                flex 
                flex-col 
                justify-center 
                items-center 
                h-full 
                w-full'>
                    <img src={footerLogo} className='w-80 h-128' />
                </div>


                <div className='
            flex
             flex-col 
             justify-center 
             items-center 
             h-full 
             w-full 
             gap-8 '>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <h1 className='
            text-slate-800
            font-dancing 
            font-bold
            shadow-sm 
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
           text-slate-800
           shadow-sm
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

    )
}

export default Footer
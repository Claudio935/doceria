import React from 'react';
import { useNavigate } from 'react-router-dom';



const Menu = () => {
    const navigation = useNavigate()
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return (
        <div
            className=" 
        flex 
        justify-evenly 
        flex-wrap 
        p-5 
        m-5 
        md:m-20 
        border-white 
        border-double 
        border-4 
        rounded-lg 
        bg-red-400 
        h-[32rem] 
        items-center 
        bg-[url('../src/assets/image/fundoCardapio.png')] 
        bg-cover">
            <div className="hidden md:w-2/5 md:flex"></div>
            <div className='w-full md:w-3/5 flex items-center justify-center flex-col'>
                <h1 className="
                text-5xl 
                md:6x1  
                font-bold   
                text-center 
                mb-5 w-full 
                text-white 
                md:text-black">Cardápio</h1>
                <div className='flex flex-col justify-evenly items-center w-full'>
                    <h2 className="
                    text-2xl 
                    md:text:4x1  
                    font-bold  
                    md:w-96 
                    text-center 
                    mb-10 
                    w-full 
                    text-white 
                    md:text-black">
                        Acesse o nosso cardápio e escolha o produto que mais te agrada.
                    </h2>
                    <button className='
                    bg-red-400 
                    p-2 
                    text-white 
                    font-bold 
                    rounded 
                    w-44 
                    md:w-72 
                    hover:bg-blue-400'
                        onClick={() => navigation('/menu')}>Ir para o cardápio</button>
                </div>
            </div>
        </div>
    );
}

export default Menu;
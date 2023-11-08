import React from 'react';

const Header = () => {




    return (
        <header className=" flex justify-start flex-wrap p-5 md:m-20 m-5 rounded-lg bg-red-400 h-[32rem] items-center bg-[url('../src/assets/image/boloFundo.png')] bg-cover">
            <div className=' md:w-3/5 flex flex-col items-center w-full'>
                { // eslint-disable-next-line react/no-unescaped-entities
                    <h1 className="text-4xl text-white font-bold   text-center mb-5 w-full">Nikki's Confeitaria</h1>}
                <div className='flex flex-col justify-evenly items-center w-full'>

                    <h2 className="text-2xl text-white font-bold  md:w-96 text-center mb-10 w-full">
                        Deliciosas criações artesanais que encantam seu paladar. Sabores feitos com amor, na nossa confeitaria especial.
                    </h2>
                    <a href={'http://api.whatsapp.com/send?1=pt_BR&phone=5571981379605'}>
                        <button className='bg-blue-400 p-2 text-white font-bold rounded w-44 md:w-72 hover:bg-green-500'>Faça sua encomenda</button>
                    </a>
                </div>
                <div className='hidden md:w-2/5 md:flex'></div>
            </div>
        </header>
    );
}

export default Header;
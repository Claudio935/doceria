import React from 'react';

const FaleConosco = () => {


    return (
        <div
            className="
        animate-fade-in
        flex 
        justify-start 
        flex-wrap 
        rounded-lg 
        bg-red-400 
        h-[32rem] 
        items-center 
        bg-[url('../src/assets/image/boloFundo.png')] 
        bg-cover">
            <div className=' md:w-3/5 flex flex-col items-center w-full'>
                <div
                    className='flex 
                flex-col 
                justify-evenly 
                items-start 
                px-5 
                sm:px-16 
                lg:px-20 
                w-full'>

                    <h2 className="
                    
                    sm:text-3xl 
                    text-2xl
                    font-bold  
                    md:w-96 
                    sm:w-64
                    text-left 
                    w-full
                    text-white
                    ">
                        Você tem alguma pergunta, sugestão ou deseja saber mais sobre nossos
                        produtos e serviços?


                    </h2>
                    <h6 className="
                    text-lg
                    text-red-500
                    font-bold  
                    md:w-96 
                    sm:w-64
                    text-left 
                    mb-10 
                    w-full
                    ">
                        Não hesite em nos contatar! Estamos aqui para ajudar.
                    </h6>
                    <a href={'http://api.whatsapp.com/send?1=pt_BR&phone=5571981379605'}>
                        <span
                            className='
                        bg-blue-500 
                        p-2 
                        text-white 
                        font-bold 
                        rounded 
                        w-64
                        md:w-72 
                        hover:bg-green-500'
                        >Clique aqui e tire suas dúvidas!</span>
                    </a>
                </div>
                <div className='hidden md:w-2/5 md:flex'></div>
            </div>
        </div>
    );
}

export default FaleConosco;
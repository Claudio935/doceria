

export const Loading = () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const cardapiIcon = require('../../assets/icones/cardapio.png')

    return (
        <div
            className='
            flex-1 
            bg-white
            flex
            flex-col
            items-center
            justify-center
            h-full
          '>
            <img src={cardapiIcon} className='w-10 h-10 animate-pulse'></img>
            <h1 className='
            text-black 
            font-dancing 
            font-bold 
            text-2xl 
            animate-pulse'>Carregando...</h1>
        </div>
    )
}
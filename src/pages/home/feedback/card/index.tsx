

const Card = () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const cliente = require('../../../../assets/image/cliente.png')
    return (
        <div
            className="
            shadow-xl
            shadow-red-300
        rounded-lg 
        p-10 
        bg-white 
        w-auto  
        items-center 
        flex 
        justify-start 
        flex-col  
        gap-8">
            <div className="flex flex-col items-center justify-center">
                <img src={cliente} className="w-20 h-20 rounded-full" />
                <h4 className="text-[20px]  font-bold font-dancing">Laís</h4>
            </div>
            <h5
                className="text-[14px] 
            text-justify 
            font-medium
            w-56"
            >Adorei a experiência na empresa,
                desde o atendimento amigável até os produtos deliciosos.
                Com certeza voltarei em breve e recomendarei aos meus amigos.</h5>

        </div>
    )
}

export default Card
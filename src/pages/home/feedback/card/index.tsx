

const Card = () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const cliente = require('../../../../assets/image/cliente.png')
    return (
        <div className=" rounded-lg p-10 bg-white w-[230px]  items-center flex justify-start flex-col  ">
            <img src={cliente} className="w-10 h-10 rounded-full" />
            <h4 className="text-[20px] my-5 font-bold">Laís</h4>
            <h5 className="text-[12px] text-justify font-bold">Adorei a experiência na empresa, desde o atendimento amigável até os produtos deliciosos. Com certeza voltarei em breve e recomendarei aos meus amigos.</h5>
        </div>
    )
}

export default Card
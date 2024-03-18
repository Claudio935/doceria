import { convertNumberToReal } from '../../../utils/functions/convetFunctions';
import ModalMenuProduct from '../modal';
import { Product, StateOpenModal } from '../types/types';
import { useState } from 'react'

import { useNavigate } from 'react-router-dom';

interface MenuProps {
    category: string
    products: Product[]
    image?: File | null
    handleMouseIn: (image: string | null) => void
}

const ProductList = ({ category, products, handleMouseIn }: MenuProps) => {

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const divisor = require('../../../assets/image/divisor.png')

    const navigate = useNavigate();

    const [dataModal] = useState<StateOpenModal>({
        id: '',
        titleProduct: '',
        price: 0,
        category,
        quantify: 0,
        image: null,
        favorite: 0
    })
    const [openModal, setOpenModal] = useState(false)



    const closeModal = () => {
        setOpenModal(false)
    }



    return (
        <div
            className="
            rounded-lg 
            text-center 
            flex 
            items-center 
            flex-col 
            px-5
            "
        >
            <div className='w-full'>
                <h1
                    className="
                    font-bold 
                    w-fit
                    text-3xl 
                    text-white
                    font-dancing 
                    text-left
                    bg-red-400 
                    rounded-full 
                    px-8
                    py-2 
                    m-2
                    ">{category}</h1>

            </div>
            {products.map((product, index) => {
                return (

                    <div
                        onMouseOver={() => handleMouseIn(product.image)}
                        className="
                    flex 
                    md:flex-row 
                    justify-between 
                    items-center 
                    w-full
                    hover:bg-blue-400 
                    py-2 
                    md:px-2 
                    md:rounded-xl  
                    my-5
                    flex-col"
                        key={index} >

                        <div
                            className='
                            flex 
                            flex-col
                            w-96 
                            items-center 
                            justify-start'>
                            <h3 className="
                        text-base
                        text-start 
                        
                        ">{product.titleProduct}</h3>
                            <p
                                className=' 
                                text-[9px] 
                                text-justify 
                                leading-3'>{product.description}</p>

                        </div>
                        <div className="
                        flex 
                        md:flex-row
                        flex-col
                        justify-around
                        items-center 
                        w-3/5 
                        text-sm">

                            <h3
                                className="
                            text-red-400 
                            font-bold 
                            text-lg
                            ">{convertNumberToReal(product.price)}</h3>

                            <button
                                className="
                            rounded-lg 
                            bg-red-400 
                            font-bold 
                            px-3 
                            text-white
                            text-xs
                            hover:bg-blue-500 p-2"
                                onClick={
                                    () =>
                                        navigate(`/product/${product.id}`)}>adicionar</button>


                        </div>
                    </div>
                )
            })}
            <img src={divisor} className='w-52 h-28' />
            <ModalMenuProduct open={openModal} dataModal={dataModal} onClose={() => closeModal()} />
        </div>

    )
};

export default ProductList;
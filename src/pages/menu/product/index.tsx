import { convertNumberToReal } from '../../../utils/functions/convetFunctions';
import ModalMenuProduct from '../modal';
import { MenuProps, StateOpenModal } from '../types/types';
import { useState } from 'react'

import { useNavigate } from 'react-router-dom';

const ProductList = ({ category, products }: MenuProps) => {

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
            className="rounded-lg text-center flex items-center flex-col px-5"
        >
            <div className=' w-full
            '>
                <h1
                    className="
                    font-bold 
                    text-4xl 
                    text-red-400 
                    font-dancing 
                    text-left">{category}</h1>

            </div>
            {products.map((product, index) => {
                return (

                    <div className="
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
                        {product.image &&
                            <img src={product.image}
                                className='w-20 h-20 rounded-full animate-fade-in'></img>}
                        <h3 className="
                        font-bold 
                        text-xl
                        text-start 
                        font-dancing
                        ">{product.titleProduct}</h3>
                        <div className="
                        flex 
                        md:flex-row
                        flex-col
                        justify-between 
                        items-center 
                        w-3/5 
                        text-sm">
                            <h3
                                className="
                            text-red-400 
                            font-bold 
                            font-dancing
                            text-sm">{convertNumberToReal(product.price)}</h3>
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
            <hr
                className=' w-4/5 m-10'></hr>
            <ModalMenuProduct open={openModal} dataModal={dataModal} onClose={() => closeModal()} />
        </div>

    )
};

export default ProductList;
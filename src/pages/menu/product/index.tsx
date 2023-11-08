import { convertNumberToReal } from '../../../utils/functions/convetFunctions';
import ModalMenuProduct from '../modal';
import { useState } from 'react'
import { CartState, Product, Props, StateOpenModal } from '../types/types';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const ProductList = ({ titleCategory, products, sizeProduct }: Props) => {
    const cart = useSelector((state: CartState) => state.cart)

    const [dataModal, setDataModal] = useState<StateOpenModal>({
        id: 0,
        titleProduct: '',
        price: 0,
        titleCategory,
        quantify: 0,
    })
    const [openModal, setOpenModal] = useState(false)

    const openModalProduct = ({ titleProduct, price, quantify, id }: Product) => {
        if (cart[titleCategory].find((item) => item.id === id)) {
            window.alert('Produto já adicionado')
            return
        }

        setDataModal(() => ({ titleProduct, price, titleCategory, quantify, id }))
        setOpenModal(true)

    }

    const closeModal = () => {
        setOpenModal(false)
    }



    return (
        <div className="rounded-lg text-center flex items-center flex-col py-10">
            <div className='mb-10'>
                <h1 className="font-bold md:text-3xl">{titleCategory}</h1>
                {sizeProduct && <h5 >{sizeProduct}</h5>}
            </div>
            {products.map((product, index) => {
                return (

                    <div className="flex flex-row justify-between items-center w-full hover:bg-blue-400 py-2 px-5  my-5" key={index} >
                        <h3 className="font-bold text-sm text-start">{product.titleProduct}</h3>
                        <div className="flex flex-row justify-between items-center w-3/5 text-sm">
                            <h3 className="text-red-400 font-bold ">{convertNumberToReal(product.price)}</h3>
                            <button className="rounded-lg bg-red-400 font-bold px-3 text-white hover:bg-blue-500 p-2"
                                onClick={() => openModalProduct({ titleProduct: product.titleProduct, price: product.price, quantify: product.quantify, id: product.id })}>adicionar</button>
                        </div>
                    </div>
                )
            })}
            <hr className=' w-4/5 m-10'></hr>
            <ModalMenuProduct open={openModal} dataModal={dataModal} onClose={() => closeModal()} />
        </div>

    )
};

export default ProductList;
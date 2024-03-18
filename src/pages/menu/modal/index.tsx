import { useState } from 'react'
import { CartState, StateOpenModal } from '../types/types'
import { convertNumberToReal } from '../../../utils/functions/convetFunctions'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { addCart } from '../../../store/cart'
import { useNavigate } from 'react-router-dom'

type DataOpenModa = {
    dataModal: StateOpenModal,
    open: boolean,
    onClose: () => void
}

const ModalMenuProduct = ({ dataModal, open, onClose }: DataOpenModa) => {
    const cart = useSelector((state: CartState) => state, shallowEqual)

    const { price, titleProduct, category, id, image, description } = dataModal
    const navigation = useNavigate()

    let minQuantify = 1
    if (category === 'caseirinhos') {
        minQuantify = 25
    }

    const dispatch = useDispatch()

    const [quantifyProduct, setQuantifyProduct] = useState(minQuantify)

    const handleIncrement = () => {

        setQuantifyProduct((quantify) => quantify + 1)
    }
    const handleDecrement = () => {
        setQuantifyProduct((quantify) => quantify === minQuantify ? quantify : quantify - 1)
    }
    const clickAddProduct = () => {
        if (cart[category]) {

            if (cart[category].find((item) => item.id === id)) {
                window.alert('Produto já adicionado')
                return
            }
        }

        dispatch(addCart(category, { price, titleProduct, quantify: quantifyProduct, id }))

        onClose()
    }
    const clickNavigation = () => {
        navigation('/cart')
    }
    return (
        <>
            {open && <div
                className='
            md:w-128 
            max-h-[75%]
            w-full
            rounded-lg 
            overflow-auto 
            bg-red-400 
            fixed
            top-[100px]
            right-1/2 
            translate-x-1/2
            shadow-2xl
            shadow-red-400
           ' >
                <p
                    className='
                    w-full 
                    text-white 
                    text-end 
                    pr-2 
                    pt-2 
                    font-dancing
                    cursor-pointer'
                    onClick={onClose} >X</p>
                <div className='w-full flex flex-col justify-evenly p-3 h-full items-center gap-6'>
                    <h1 className='
                    font-bold 
                    text-white 
                    font-dancing 
                    text-[50px]
                    '>{titleProduct}</h1>
                    <div className='
                    flex 
                    flex-col 
                    items-center 
                    justify-around
                    gap-8'>
                        {image && <img className='w-64 h-64 rounded-lg' src={image}></img>}
                        {description && <p className='
                        text-justify 
                        text-white 
                        font-dancing
                        px-10'>{description}</p>}
                    </div>
                    <div className='flex flex-row justify-center items-center text-[12px] '>
                        <button onClick={handleDecrement}
                            className='
                            text-white 
                            rounded-full
                            bg-blue-400 
                            w-5 
                            h-5
                            hover:bg-blue-500 
                            flex 
                            items-center 
                            justify-center 
                            p-[14px] 
                            font-bold
                            text-[15px]'>-</button>
                        <h2 className='font-bold text-white mx-5'>Quantidade: {quantifyProduct}</h2>
                        <button onClick={handleIncrement}
                            className='
                            text-white 
                            rounded-full 
                            bg-blue-400 
                            w-5 
                            h-5 
                            hover:bg-blue-500 
                            flex 
                            items-center 
                            justify-center 
                            p-[14px] 
                            font-bold
                            text-[15px]'>+</button>
                    </div>
                    <h2
                        className='
                    font-bold 
                    text-white
                    text-[12px]'>Valor: {convertNumberToReal(price * quantifyProduct)}</h2>
                    <div className='w-full flex flex-col justify-between items-center gap-3'>
                        <button
                            className='
                    font-bold
                    text-white 
                    text-[12px]
                    bg-blue-400 
                    hover:bg-blue-500 
                    p-2 
                    w-[100px] 
                    rounded-lg'
                            onClick={clickAddProduct}>Adicionar</button>
                        <button
                            className='font-bold 
                    text-white 
                    text-[12px] 
                    bg-green-400 
                    hover:bg-blue-500 
                    p-2 
                    w-[150px] 
                    rounded-lg'
                            onClick={onClose}>Continuar comprando</button>
                        <button className='
                    border-white
                    border 
                    border-solid 
                    font-bold 
                    text-[12px] 
                    text-white 
                    bg-red-400 
                    hover:bg-blue-500 
                    p-2 w-[150px] 
                    rounded-lg
                  ' onClick={clickNavigation}>Ir para o Carrinho</button>

                    </div>
                </div>

            </div>}
        </>
    )
}

export default ModalMenuProduct
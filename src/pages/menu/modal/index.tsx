import { useState } from 'react'
import { CartState, StateOpenModal } from '../types/types'
import { convertNumberToReal } from '../../../utils/functions/convetFunctions'
import { Categorys } from '../../../utils/data'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../../../store'
import { useNavigate } from 'react-router-dom'

type DataOpenModa = {
    dataModal: StateOpenModal,
    open: boolean,
    onClose: () => void
}

const ModalMenuProduct = ({ dataModal, open, onClose }: DataOpenModa) => {
    const cart = useSelector((state: CartState) => state.cart)

    const { price, titleProduct, titleCategory, id } = dataModal
    const navigation = useNavigate()

    let minQuantify = 1
    if (titleCategory === 'caseirinhos') {
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

        if (cart[titleCategory].find((item) => item.id === id)) {
            window.alert('Produto já adicionado')
            return
        }
        dispatch(addCart(titleCategory, { price, titleProduct, quantify: quantifyProduct, id }))

        onClose()
    }
    const clickNavigation = () => {
        navigation('/cart')
    }
    return (
        <>
            {open && <div className='w-96 rounded-lg h-96 bg-red-400 fixed bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2' >
                <div className='w-full flex flex-col justify-evenly p-5 h-full items-center'>
                    <h1 className='font-bold text-white'>{titleProduct}</h1>
                    <div className='flex flex-row justify-center items-center '>
                        <button onClick={handleDecrement}
                            className='text-white rounded-full bg-blue-400 w-5 h-5 hover:bg-blue-500 flex items-center justify-center p-[18px] font-bold'>-</button>
                        <h2 className='font-bold text-white mx-5'>Quantidade: {quantifyProduct}</h2>
                        <button onClick={handleIncrement}
                            className='text-white rounded-full bg-blue-400 w-5 h-5 hover:bg-blue-500 flex items-center justify-center p-[18px] font-bold'>+</button>
                    </div>
                    <h2 className='font-bold text-white'>Valor: {convertNumberToReal(price * quantifyProduct)}</h2>
                    <button className='font-bold text-white text-[12px] bg-blue-400 hover:bg-blue-500 p-2 w-[100px] rounded-lg' onClick={clickAddProduct}>Adicionar</button>
                    <button className='font-bold text-white text-[12px] bg-green-400 hover:bg-blue-500 p-2 w-[150px] rounded-lg' onClick={onClose}>Continuar comprando</button>
                    <button className='border-white border border-solid font-bold text-[12px] text-white bg-red-400 hover:bg-blue-500 p-2 w-[150px] rounded-lg' onClick={clickNavigation}>Ir para o Carrinho</button>

                    {titleCategory === Categorys.CASEIRINHOS.toLocaleLowerCase() && <h5 className='font-bold text-white text-[12px]'>Observação: Para esse Produto a quantiidade mínima é de {minQuantify}</h5>}
                </div>

            </div>}
        </>
    )
}

export default ModalMenuProduct
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { CartState } from '../../../menu/types/types';
import { convertNumberToReal } from '../../../../utils/functions/convetFunctions';
import { deleteProduct, incrementQuantify, decrementQuantify } from '../../../../store';
import { useEffect } from 'react';



interface Props {
    categoryValues: string
}

const Card = ({ categoryValues }: Props) => {

    const cart = useSelector((state: CartState) => state.cart, shallowEqual)

    const dispatch = useDispatch()

    const handleIncrement = (id: string) => {


        dispatch(incrementQuantify(id, categoryValues))

    }
    const handleDecrement = (id: string, quantify: number, category: string) => {


        if (quantify <= 0) return

        if (cart[category].some(item => item.id === id)) {
            dispatch(decrementQuantify(id, categoryValues))
        }



    }
    const handleDelete = (id: string) => {

        dispatch(deleteProduct(id, categoryValues))

    }

    useEffect(() => {
        // storing input name
        localStorage.setItem(categoryValues, JSON.stringify(cart[`${categoryValues}`]));
    }, [cart]);
    return (

        <>
            {cart[`${categoryValues}`]?.length > 0 ?

                cart[`${categoryValues}`].map((product, index) => {
                    return (
                        <div
                            key={index}
                            className='
                        flex ]
                        flex-col 
                        items-center 
                        justify-center 
                        bg-white 
                        rounded-xl 
                        w-80 
                        h-40 
                        m-2 '>
                            <h1 className='font-bold'>{product.titleProduct}</h1>
                            <h1
                                className='
                            font-bold 
                            text-red-600'>
                                Preço: {convertNumberToReal(product.price * product.quantify)}</h1>
                            <div className='flex flex-row justify-center items-center '>
                                <button
                                    className='
                                    text-white rounded-full 
                                    bg-blue-400 w-5 h-5 
                                    hover:bg-blue-500 
                                    flex 
                                    items-center 
                                    justify-center
                                    p-[15px] 
                                    font-bold'
                                    onClick={() =>
                                        handleDecrement(
                                            product.id,
                                            product.quantify,
                                            categoryValues)}>
                                    -</button>
                                <h1 className='m-2'>Quantidade: {product.quantify}</h1>
                                <button
                                    onClick={() => handleIncrement(product.id)}
                                    className='
                                    text-white 
                                    rounded-full 
                                    bg-blue-400 
                                    w-5 
                                    h-5 
                                    hover:bg-blue-500 
                                    items-center 
                                    justify-center 
                                    p-[15px] 
                                    flex
                                    font-bold'>
                                    +</button>
                            </div>
                            <button
                                onClick={() => handleDelete(product.id)}
                                className='
                                text-white  
                                bg-red-400 
                                rounded-lg 
                                flex 
                                items-center 
                                justify-center  
                                font-bold p-1 
                                hover:bg-red-600'
                            >Deletar</button>

                        </div>
                    )
                })
                :
                <div>
                    <h1
                        className='
                    text-white 
                    font-bold 
                    w-80 
                    h-40 
                    mt-2'>Não foram adicionada esta categoria de produto no carrinho</h1>
                </div>

            }

        </>

    )
}

export default Card;
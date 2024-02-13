import React from 'react'

import { findCategory } from '../../../utils/functions/dataFunctions';
import { productFormData } from '../../menu/types/types';
import { convertNumberToReal } from '../../../utils/functions/convetFunctions';

interface Props {
    deleteProduct: (id: string) => Promise<void>,
    productArray: productFormData[]
}


const ProductList = ({ deleteProduct, productArray }: Props) => {


    return (
        <div>
            {productArray
                .length === 0 && <div className='flex justify-center items-center'>
                    <p
                        className='
                text-white 
                font-bold 
                text-xl
                '>Nenhum produto adicionado</p>
                </div>}
            {
                findCategory(productArray).map((item, index) =>
                    <div key={index} className='mb-4'>
                        <h1 className='
                        text-red-500 
                        font-dancing 
                        font-bold 
                        text-4xl 
                        mb-4'>{item}</h1>
                        {productArray.map((product, index) => {
                            if (item === product.category) {
                                return (
                                    <div key={index} className='
                                    flex 
                                    flex-row 
                                    justify-between
                                    mb-2'>
                                        <img src={
                                            product.image ?
                                                product.image : ''}
                                            className='w-20 h-20 rounded-full'></img>
                                        <p
                                            className='
                                        text-white 
                                        font-bold 
                                        text-xl
                                        flex
                                        justify-center
                                        items-center
                                        font-dancing '>{product.titleProduct}</p>
                                        <div className='flex flex-row items-center justify-center'>
                                            <p
                                                className='
                                        text-white 
                                        font-bold 
                                        text-xs
                                        mr-2
                                        font-dancing'>{convertNumberToReal(product.price)}</p>

                                            <button
                                                className='
                                            text-white 
                                            font-light 
                                            h-5 
                                            w-5 
                                            rounded-full
                                            text-[12px]'
                                                onClick={() => deleteProduct(product.id)}
                                                title='deletar produto'>X</button>
                                        </div>
                                    </div>

                                )
                            }
                        })}
                        <hr></hr>

                    </div>
                )
            }

        </div>
    )
}

export default ProductList
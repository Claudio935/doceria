import React from 'react'

import { findCategory } from '../../../utils/functions/dataFunctions';
import { productFormData } from '../../menu/types/types';
import { convertNumberToReal } from '../../../utils/functions/convetFunctions';

interface Props {
    deleteProduct: (id: string) => Promise<void>,
    productArray: productFormData[]
}


const ProductList = ({ deleteProduct, productArray }: Props) => {



    // useEffect(() => { console.log(productArray) }, [productArray])


    return (
        <div>
            {productArray
                .length === 0 && <div className='flex justify-center items-center'>
                    <p
                        className='
                text-white 
                font-bold 
                text-xl
                '>Nenhum product adicionado</p>
                </div>}
            {
                findCategory(productArray).map((item, index) =>
                    <div key={index} className='mb-4'>
                        <h1 className='text-red-500 font-bold text-4xl mb-4'>{item}</h1>
                        {productArray.map((product, index) => {
                            if (item === product.category) {
                                return (
                                    <div key={index} className='
                                    flex 
                                    flex-row 
                                    justify-between
                                    mb-2'>
                                        <p
                                            className='
                                        text-white 
                                        font-bold 
                                        text-xl'>{product.titleProduct}</p>
                                        <div className='flex flex-row items-center justify-center'>
                                            <p
                                                className='
                                        text-white 
                                        font-bold 
                                        text-xl
                                        mr-2'>{convertNumberToReal(product.price)}</p>

                                            <button
                                                className='
                                            text-white 
                                            font-light 
                                            h-5 
                                            w-5 
                                            bg-red-600 
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
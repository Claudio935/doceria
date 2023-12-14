import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'

import ProductList from './poductList';
import Navbar from '../../components/navbar';
import { useProductData } from '../../utils/functions/dataFunctions';
import { productFormData } from '../menu/types/types';
import { getAuth, onAuthStateChanged } from 'firebase/auth';





const AddProduto = () => {

    const [login, setLogin] = useState(true)

    const { addProductToCart, deleteProduct, productArray } = useProductData()

    const auth = getAuth();


    const schema = z.object({

        titleProduct: z.string({
            // eslint-disable-next-line camelcase
            required_error: 'Nome é requerido',
            // eslint-disable-next-line camelcase
            invalid_type_error: 'Nome deve ser string',
        })
            .min(4, { message: 'O nome deve ter no mínimo 4 letras' }),
        // eslint-disable-next-line camelcase
        category: z.string({
            // eslint-disable-next-line camelcase
            required_error: 'categoria é requerido',
            // eslint-disable-next-line camelcase
            invalid_type_error: 'categoria deve ser string',
        })
            .min(4, { message: 'A categoria deve ter no mínimo 4 letras' }),
        // eslint-disable-next-line camelcase
        price: z.number({
            // eslint-disable-next-line camelcase
            required_error: 'inteiro é requerido',
            // eslint-disable-next-line camelcase
            invalid_type_error: 'valor deve ser um numero inteiro',
        })


    })
    const { register, handleSubmit, formState: { errors } } =
        useForm<productFormData>({ resolver: zodResolver(schema) })





    const onSubmit: SubmitHandler<productFormData> = async (product) => {

        addProductToCart(product)
    }


    onAuthStateChanged(auth, (user) => {
        if (user) {

            setLogin(true)

        } else {
            setLogin(false)
        }
    });

    if (!login) {
        return (
            <div className="
        bg-red-400 
        min-h-screen 
        min-w-full 
        flex 
        items-center
        justify-center 
        flex-col
        ">
                <Navbar />
                <div className='
            flex
            flex-col 
            items-center 
            justify-center
            w-full
            h-full
           '>
                    <h1 className='text-white font-bold text-3xl'>Usuário não logado</h1>
                </div>

            </div>
        )
    }

    return (
        <div className="
        bg-red-400 
        min-h-screen 
        min-w-full 
        flex 
        items-center 
        flex-col
        md:flex-row
        md:h-screen">
            <Navbar />
            <div className='
            flex
            flex-col 
            items-center 
            justify-center
            w-full
            h-full
            md:h-screen'>
                <form onSubmit={handleSubmit(onSubmit)} className='
                flex 
            flex-col 
            items-center 
            justify-center
            h-full
            p-4
            md:pt-[80px]
            w-full
            bg-white'>
                    <h1
                        className='text-red-400 font-bold text-3xl'>Adicionar Produto</h1>
                    <label

                        className='text-red-400 font-bold '>Nome do produto</label>
                    <input
                        className='border-red-400 border-2 border-solid m-2'
                        {...register('titleProduct')} ></input>
                    {errors.category && <span>{errors.category.message}</span>}
                    <label htmlFor='categoria'
                        className='text-red-400 font-bold '>Categoria do produto</label>
                    <input
                        className='border-red-400 border-2 border-solid m-2'
                        {...register('category')} ></input>
                    {errors.category && <span>{errors.category.message}</span>}
                    <label
                        className='text-red-400 font-bold '>Valor do produto</label>
                    <input
                        className='border-red-400 border-2 border-solid m-2'
                        {...register('price', { valueAsNumber: true })} ></input>
                    {errors.price && <span>{errors.price.message}</span>}

                    <button type='submit' className='
                p-2 
                bg-blue-400 
                text-white 
                font-bold 
                hover:bg-blue-500
                text-sm
                rounded-lg'
                    >Adicionar Produto</button>
                </form>
            </div>
            <div className='w-full h-full p-5 overflow-y-scroll md:pt-[80px]'>
                <ProductList productArray={productArray} deleteProduct={deleteProduct} />
            </div>
        </div>
    )
}

export default AddProduto
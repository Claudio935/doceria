import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import Navbar from '../../../../components/navbar';
import { productFormData } from '../../../menu/types/types';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { DropZone } from '../../../../components/dropzone';
import { Input } from '../../../../components/input';

interface FormProdutoProps {
    handleAddProduct: (product: productFormData, image: File | null) => void
}
const FormProduto: React.FC<FormProdutoProps> = ({ handleAddProduct }) => {

    const [login, setLogin] = useState(true)
    const [image, setImage] = useState<File | null>()


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
        }),
        description: z.string()

    })
    const { register, handleSubmit, formState: { errors } } =
        useForm<productFormData>({ resolver: zodResolver(schema) })




    const handleChange = (image: File | null) => {

        setImage(image)

    }
    const onSubmit: SubmitHandler<productFormData> = async (product) => {
        console.log(product.description)
        handleAddProduct(product, image ? image : null)

    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                setLogin(true)

            } else {
                setLogin(false)
            }
        });
    }, [])


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


        <div className='
            flex
            flex-col 
            items-center 
            w-full
            mt-[80px]
            md:mt-0
            md:w-1/2
            md:h-[calc(100%_-_80px)]
            overflow-auto
            md:absolute
            md:top-[80px]
            md:left-0
            bg-white
            gap-4
            pb-4
           '>
            <h1
                className='
                        text-red-400 
                        font-bold 
                        text-3xl 
                        w-full 
                        text-center
                        mt-4
                        '>Adicionar Produto</h1>
            <form onSubmit={handleSubmit(onSubmit)} >

                <div className='
                    flex 
                    lg:flex-row 
                    flex-col 
                    items-center 
                    justify-center
                    h-full
                    gap-4
                    '>
                    <div className='flex flex-col  items-center 
            justify-center
            h-full'>
                        <Input
                            label='Nome do produto'
                            color='red'
                            register={register('titleProduct')}
                            error={errors.titleProduct?.message}
                        />

                        <Input
                            color='red'
                            label='Categoria do produto'
                            register={register('category')}
                            error={errors.category?.message} />

                        <Input
                            color='red'
                            label='Valor do produto'
                            register={register('price', { valueAsNumber: true })}
                            error={errors.price?.message} />


                        <div className='m-[10px] w-[240px] '>
                            <DropZone
                                handleChange={handleChange} />
                        </div>
                    </div>
                    <div className='flex flex-col h-full items-center '>
                        <div className='flex flex-col items-center'>
                            <label
                                className='text-red-400 font-bold '>Descrição do produto</label>
                            <textarea
                                cols={6}
                                {...register('description')}
                                className='
                            border-red-400 
                            border-2 
                            border-solid 
                            outline-none
                            m-2 
                            p-2
                            rounded-lg
                            min-h-[200px] 
                            w-[200px]
                            focus:shadow-red-500
                            focus:shadow-[0px_0px_5px_3px_rgba(0,0,0,0.3)]
                            '
                            ></textarea>
                        </div>
                        <button type='submit' className='
                p-2 
                bg-blue-400 
                text-white 
                font-bold 
                hover:bg-blue-500
                text-sm
                rounded-lg'
                        >Adicionar Produto</button>
                    </div>

                </div>

            </form>
        </div>


    )
}

export default FormProduto
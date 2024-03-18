import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { DropZone } from '../../../components/dropzone'
import { commentData } from '../../menu/types/types'
import { useCommentData } from '../../../utils/functions/dataFunctions'
import { Input } from '../../../components/input'
import Navbar from '../../../components/navbar'
import AccordionList from './card'

const AddComment = () => {

    const [login, setLogin] = useState(true)
    const [image, setImage] = useState<File | null>()
    const { commentArray, addComment, loading, deleteComment } = useCommentData({})

    const auth = getAuth();


    const schema = z.object({

        name: z.string({
            // eslint-disable-next-line camelcase
            required_error: 'nome requerido',
            // eslint-disable-next-line camelcase
            invalid_type_error: 'nome deve ser string',
        })
            .min(4, { message: 'O nome deve ter no mínimo 4 letras' }),

        comment: z.string({
            // eslint-disable-next-line camelcase
            required_error: 'Comentário requerido',
            // eslint-disable-next-line camelcase
            invalid_type_error: 'nome deve ser string',
        }).min(4, { message: 'O comentário deve ter no mínimo 4 letras' }),
        job: z.string({
            // eslint-disable-next-line camelcase
            invalid_type_error: 'nome deve ser string',
        })

    })
    const { register, handleSubmit, formState: { errors } } =
        useForm<commentData>({ resolver: zodResolver(schema) })




    const handleChange = (image: File | null) => {

        setImage(image)

    }
    const onSubmit: SubmitHandler<commentData> = async (comment) => {
        console.log(comment.job, image)
        addComment({ ...comment, image: image ? image : null })

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

        <div className="
            bg-red-400 
            min-h-screen 
            min-w-full 
            flex 
            items-center
            justify-center 
            flex-col
            ">

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
                pl-16
                pr-6
               '>
                <h1
                    className='
                            text-red-400 
                            font-bold 
                            text-3xl 
                            w-full 
                            text-center
                            mt-4
                            '>Adicionar Comentário</h1>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='w-full'
                >

                    <div className='
                        flex 
                        w-full
                        flex-col 
                        items-center 
                        justify-center
                        h-full
                        '>
                        <div className='flex flex-col  
                                        items-center 
                                        justify-center
                                        h-full
                                        w-full'>
                            <Input
                                label='name do cliente'
                                color='red'
                                register={register('name')}
                                error={errors.name?.message} />

                            <Input
                                color='red'
                                label='Profissão'
                                register={register('job')}
                                error={errors.job?.message} />

                        </div>
                        <div className='flex flex-col h-full items-center w-full'>
                            <div className='
                            flex 
                            flex-col 
                            items-center 
                            gap-[48px]  
                            mb-[40px] w-full'>

                                <div className='flex items-start flex-col w-full'>
                                    <label
                                        className='
                                        text-red-400 
                                        font-bold mb-[8px]'>Opnião do cliente</label>
                                    <textarea
                                        cols={6}
                                        maxLength={220}
                                        {...register('comment')}
                                        className='
                                border-red-400 
                                rounded-lg
                                border-2 
                                border-solid 
                                outline-none
                                min-h-[200px] 
                                focus:shadow-red-500
                                w-full
                                p-2
                                focus:shadow-[0px_0px_5px_3px_rgba(0,0,0,0.3)]
                                '
                                    />
                                    {errors.comment && <span>{errors.comment.message}</span>}
                                </div>
                                <div className='flex items-start flex-col w-64'>
                                    <label
                                        className='
                                        text-red-400 
                                        font-bold 
                                        mb-[8px]'>Foto do cliente</label>
                                    <DropZone
                                        handleChange={handleChange} {...register('image')} />
                                </div>
                            </div>
                            <button type='submit' className='
                    py-2
                    px-4 
                    bg-blue-400 
                    text-white 
                    font-bold 
                    hover:bg-blue-500
                    text-sm
                    rounded-lg'
                            >Adicionar comentário</button>
                        </div>

                    </div>

                </form>
            </div>
            <div className='
                w-full 
                md:w-1/2 
                md:h-[calc(100%_-_80px)] 
                md:absolute 
                md:top-[80px] 
                md:right-0 
                p-5 
                pl-12
                overflow-y-auto'>
                <AccordionList
                    commentArray={commentArray}
                    loading={loading}
                    deleteFunction={deleteComment} />

            </div>
        </ div>
    )

}

export default AddComment
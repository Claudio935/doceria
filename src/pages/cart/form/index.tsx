import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form';
import { Store } from '../../menu/types/types';
import { Input } from '../../../components/input';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../utils/data/firebase/config';
import { openModal } from '../../../store/alert';





interface ContatoForm {
    nome: string
    bairro: string
    cep: string
    email: string
    telefone: string
    data: string
}

const FormCart = () => {

    const dispatch = useDispatch()



    const cart = useSelector((state: Store) => state.cart, shallowEqual)

    const schema = z.object({

        nome: z.string({
            // eslint-disable-next-line camelcase
            invalid_type_error: 'Nome deve ser string',
        }).min(1, { message: 'Nome é necessário' }),
        email: z.string({
            // eslint-disable-next-line camelcase
            invalid_type_error: 'Email deve ser string',
        })
            .email({ message: 'Email invalido' }),
        bairro: z.string({
            // eslint-disable-next-line camelcase
            invalid_type_error: 'Bairro deve ser string',
        })
            .min(4, { message: 'A Bairro deve ter no mínimo 4 letras' }),

        // eslint-disable-next-line camelcase
        cep: z.string({
            // eslint-disable-next-line camelcase
            invalid_type_error: 'valor deve ser um numero inteiro',
        }).regex(/^\d{5}-?\d{3}$/, 'CEP inválido'),
        telefone: z.string({
            // eslint-disable-next-line camelcase
            invalid_type_error: 'valor deve ser um numero inteiro',
        }).regex(/^9?\d{4}-?\d{4}$/,
            'Número de telefone inválido, deve ser retirado o código do pais e o de área'),
        data: z.string().min(1, { message: 'valor de data é requerido!' })
    })
    const { register, handleSubmit, formState: { errors } } =

        useForm<ContatoForm>({ resolver: zodResolver(schema) })

    const updateFavorite = async (id: string, favorite: number) => {
        const cardapioRef = doc(db, 'cardapio', id)
        const newFavorite = favorite + 1
        try {
            await updateDoc(cardapioRef, {
                favorite: newFavorite
            });
        }
        catch (err) {
            console.log('deu ruim', err)
        }
    }
    const onSubmit: SubmitHandler<ContatoForm> = async (contato) => {
        const cartKeys = Object.keys(cart)

        if (cartKeys.length === 0) {
            dispatch(openModal('Não existe nenhum produto no carrinho!'))
            return
        }

        const dataEncomenda = contato.data;
        const dataEncomendaFormated = dataEncomenda.split('-').reverse().join('/');
        // eslint-disable-next-line max-len
        let msg = `nome: ${contato.nome}%0Dbairro: ${contato.bairro}%0Dcep: ${contato.cep}%0Demail: ${contato.email}%0DTelefone: ${contato.telefone}%0DData da encomenda: ${dataEncomendaFormated}%0Dencomenda:`

        // eslint-disable-next-line max-len
        cartKeys.forEach((key) => {
            console.log(key)
            cart[key].forEach((product) => {
                msg = msg + ` ${product.quantify} ${product.titleProduct}, `

                updateFavorite(product.id, product.favorite)
            })
            window.location.href = `https://wa.me//5571981379605?text=${msg}`

        })

    }

    return (
        <div className=' overflow-auto h-full md:fixed 
        md:bottom-1/2 
        right-4
        mt-[80px]
        md:translate-y-1/2 
        md:w-1/
        py-2
        md:w-1/2
        pr-2'>
            <form className='
            flex 
            flex-col 
            items-center 
            justify-center 
            p-2
            '
                onSubmit={handleSubmit(onSubmit)}
            >
                <h4
                    className='
                font-bold 
                text-white 
                text-center 
                text-[24px] 
                mb-5 
                mt-16 
                md:mt-20'> Os preços e quantidades estão certos? Faça sua encomenda!</h4>

                <Input
                    color='blue'
                    label='Nome'
                    register={register('nome')}
                    error={errors?.nome?.message}
                />

                <Input
                    label='Bairro'
                    register={register('bairro')}
                    error={errors?.bairro?.message}
                />


                <Input
                    label={'cep'}
                    register={register('cep')}
                    error={errors?.cep?.message}
                />

                <Input
                    label='E-mail'
                    register={register('email')}
                    error={errors?.email?.message}
                    type='email'
                />
                <Input
                    label='Telefone (Whatsapp)'
                    register={register('telefone')}
                    error={errors?.telefone?.message}
                />
                <Input
                    label='Data da encomenda'
                    register={register('data')}
                    error={errors?.data?.message}
                    type='date'
                />

                <button
                    type={'submit'}
                    className='
                    bg-blue-400 
                    hover:bg-red-500 
                    text-white 
                    p-4 
                    rounded-lg 
                    font-bold'>Encomendar</button>

            </form>
        </div>
    )
}

export default FormCart
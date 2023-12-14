import { useStore } from 'react-redux';
import { Store } from 'redux';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form';
import { CartState } from '../../menu/types/types';


interface ContatoForm {
    nome: string
    bairro: string
    cep: number
    email: string
}

const FormCart = () => {


    const store: Store = useStore()
    const { cart: { brigadeiros, paes, caseirinhos, sobremesas } }: CartState = store.getState()

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
        cep: z.number({
            // eslint-disable-next-line camelcase
            invalid_type_error: 'valor deve ser um numero inteiro',
        }).min(8, { message: 'O cep deve ter 8 números sem -' })

    })
    const { register, handleSubmit, formState: { errors } } =
        useForm<ContatoForm>({ resolver: zodResolver(schema) })
    const onSubmit: SubmitHandler<ContatoForm> = (contato) => {

        let msgBrigadeiro = ''
        let msgPaes = ''
        let msgCaseirinhos = ''
        let msgSobremesas = ''
        brigadeiros?.forEach(brigadeiro => {
            // eslint-disable-next-line max-len
            msgBrigadeiro = msgBrigadeiro + `${brigadeiro.quantify} unidades de ${brigadeiro.titleProduct}/ `

        });
        caseirinhos?.forEach(caseiro => {
            // eslint-disable-next-line max-len
            msgCaseirinhos = msgCaseirinhos + `${caseiro.quantify} unidades de ${caseiro.titleProduct}/  `

        });

        paes?.forEach(pao => {
            msgPaes = msgPaes + `${pao.quantify} unidades de ${pao.titleProduct}/  `

        });

        sobremesas?.forEach(sobremesa => {
            // eslint-disable-next-line max-len
            msgSobremesas = msgSobremesas + ` ${sobremesa.quantify} unidades de ${sobremesa.titleProduct}/ `

        });

        // eslint-disable-next-line max-len
        const msg = `lá, meu nome é ${contato.nome} moro no bairro: ${contato.bairro} com cep: ${contato.cep} com email: ${contato.email} e quero encomendar: ${msgBrigadeiro} ${msgPaes} ${msgSobremesas} ${msgCaseirinhos}`
        console.log(msg, errors)
    }



    return (
        <form className='
            flex 
            flex-col 
            items-center 
            justify-center 
            md:fixed 
            md:bottom-1/2 
            right-9 
            md:translate-y-1/2 
            md:w-1/2'
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

            <label className='font-bold text-white ' htmlFor='nome' >
                Nome:
            </label>
            <input
                {...register('nome')}
                className='
                w-full 
                rounded-lg 
                p-3 
                mb-5'
            >
            </input>
            {errors.nome && <span>{errors.nome.message}</span>}
            <label className='font-bold text-white' htmlFor='bairro'>
                Bairro:
            </label>
            <input
                {...register('bairro')}
                className='
                w-full 
                rounded-lg 
                p-3 
                mb-5'
            >
            </input>
            {errors.bairro && <span>{errors.bairro.message}</span>}
            <label className='font-bold text-white' htmlFor='bairro'>
                Cep:
            </label>
            <input
                {...register('cep', { valueAsNumber: true })}
                className='
                w-full 
                rounded-lg 
                p-3 
                mb-5'
            >
            </input>
            {errors.email && <span>{errors.email.message}</span>}
            <label className='font-bold text-white' htmlFor='bairro'>
                Email:
            </label>
            <input
                {...register('email')}
                className='
                w-full 
                rounded-lg 
                p-3 
                mb-5'
            ></input>
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
    )
}

export default FormCart

import { useStore } from 'react-redux';
import Section from './section';
import { Store } from 'redux';
import { CartState } from '../menu/types/types';
import { useState } from 'react';
import Navbar from '../home/navbar';


const Cart = () => {

    const [contato, setContato] = useState({
        nome: '',
        bairro: '',
        cep: '',
        email: ''
    })
    const store: Store = useStore()
    const { cart: { brigadeiros, paes, caseirinhos, sobremesas } }: CartState = store.getState()

    let msgBrigadeiro = ''
    let msgPaes = ''
    let msgCaseirinhos = ''
    let msgSobremesas = ''
    brigadeiros?.forEach(brigadeiro => {
        msgBrigadeiro = msgBrigadeiro + `${brigadeiro.quantify} unidades de ${brigadeiro.titleProduct}/ `

    });
    caseirinhos?.forEach(caseiro => {
        msgCaseirinhos = msgCaseirinhos + `${caseiro.quantify} unidades de ${caseiro.titleProduct}/  `

    });

    paes?.forEach(pao => {
        msgPaes = msgPaes + `${pao.quantify} unidades de ${pao.titleProduct}/  `

    });

    sobremesas?.forEach(sobremesa => {
        msgSobremesas = msgSobremesas + ` ${sobremesa.quantify} unidades de ${sobremesa.titleProduct}/ `

    });


    const msg = `Olá, meu nome é ${contato.nome} moro no bairro: ${contato.bairro} com cep: ${contato.cep} com email: ${contato.email} e quero encomendar: ${msgBrigadeiro} ${msgPaes} ${msgSobremesas} ${msgCaseirinhos}`

    return (
        <div className="bg-red-400 md:grid md:grid-cols-2 p-4  min-h-screen">
            <Navbar />

            <Section />
            <div className='flex flex-col items-center justify-center md:fixed md:bottom-1/2 right-9 md:translate-y-1/2 md:w-1/2'>

                <h4 className='font-bold text-white text-center text-[24px] mb-5 mt-16 md:mt-20'> Os preços e quantidades estão certos? Faça sua encomenda!</h4>

                <label className='font-bold text-white ' htmlFor='nome' >
                    Nome:
                </label>
                <input name='nome' className='w-full rounded-lg p-3 mb-5' onChange={(e) => setContato((contato) => ({ ...contato, nome: e.target.value }))}></input>
                <label className='font-bold text-white' htmlFor='bairro'>
                    Bairro:
                </label>
                <input name='bairro' className='w-full rounded-lg p-3 mb-5' onChange={(e) => setContato((contato) => ({ ...contato, bairro: e.target.value }))}></input>
                <label className='font-bold text-white' htmlFor='bairro'>
                    Cep:
                </label>
                <input name='bairro' className='w-full rounded-lg p-3 mb-5' onChange={(e) => setContato((contato) => ({ ...contato, email: e.target.value }))}></input>
                <label className='font-bold text-white' htmlFor='bairro'>
                    Email:
                </label>
                <input name='bairro' className='w-full rounded-lg p-3 mb-5' onChange={(e) => setContato((contato) => ({ ...contato, bairro: e.target.value }))}></input>


                <a href={`http://api.whatsapp.com/send?1=pt_BR&phone=5571981379605&text=${encodeURIComponent(msg)}`}>
                    <button className='bg-blue-400 hover:bg-red-500 text-white p-4 rounded-lg font-bold'>Encomendar</button>
                </a>
            </div>

        </div>
    )
}

export default Cart
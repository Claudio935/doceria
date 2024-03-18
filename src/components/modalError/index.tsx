import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { Store } from '../../pages/menu/types/types'
import { closeModal } from '../../store/alert'


export const ModalError = () => {

    const alert = useSelector((state: Store) => state.alert, shallowEqual)
    const dispatch = useDispatch()
    return (
        <div
            className={`
        ${alert.open ? '' : 'hidden'}
        w-1/3
        h-1/3
        bg-white 
        shadow-2xl
        shadow-red-500
        border-red-500
        border
        flex 
        flex-col 
        gap-8
        justify-center 
        items-center 
        fixed
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        rounded-lg
        p-2
        text-center
        `}>
            <h1 className='font-bold font-serif'>{alert.message}</h1>
            <button
                className='
                bg-blue-400 
                p-2 
                text-white 
                font-bold
                rounded-lg
                hover:bg-blue-500'
                onClick={() => dispatch(closeModal())}>fechar</button>
        </div>
    )
}
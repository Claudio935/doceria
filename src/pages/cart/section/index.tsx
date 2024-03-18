
import { shallowEqual, useSelector } from 'react-redux';
import Card from './card';
import { CartState } from '../../menu/types/types';


const Section = () => {
    const cart = useSelector((state: CartState) => state.cart, shallowEqual)

    const category = Object.keys(cart)

    return (

        <div className='flex flex-col items-center justify-center mt-20'>
            {category.map((item, index) =>
            (<div key={index} className='border-b-2 border-white border-solid pb-2'>
                <h1 className='font-bold text-white text-[25px]'>{item}</h1>
                <Card categoryValues={item} />

            </div>
            )
            )}
        </div>

    )
}

export default Section;
import { useProductData } from '../../../utils/functions/dataFunctions'
import { convertNumberToReal } from '../../../utils/functions/convetFunctions';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../../../components/loading';

const CardProduct = () => {

    const { productArray, loading } = useProductData({ numberOfProduct: 3, sortBy: 'favorite' })
    const navigation = useNavigate()
    if (loading) {
        return (<div className='w-full h-20'>
            <Loading />
        </div>)
    }
    return (
        <div className='md:flex  justify-center rounded-lg gap-10 grid md:grid-cols-3 grid-cols-2'>
            {productArray.map((product) => {
                return (
                    <div
                        onClick={() => navigation(`/product/${product.id}`)}
                        key={product.id}
                        className='
                            flex 
                            justify-end 
                            items-center 
                            flex-col 
                            font-dancing
                            shadow-red-300
                            md:w-1/4
                            w-full
                            cursor-pointer
                            min-h-[340px]
                            max-h-[440px]
                            h-auto
                            gap-6
                            rounded-lg
                            relative
                            shadow-2xl
                            overflow-hidden
                            transition-[all_0.5s]
                            hover:scale-105
                           '>
                        {product.image &&
                            <div className="w-full h-full overflow-hidden absolute">
                                <img src={product.image}
                                    className="
                                    h-full 
                                    w-full 
                                    hover:scale-110 
                                    transition 
                                    duration-500 
                                    cursor-pointer 
                                    object-cover"
                                />
                            </div>}
                        <div
                            className=' 
                                    flex 
                                    flex-col 
                                    items-center 
                                    justify-center
                                    p-5 
                                    gap-2
                                    absolute 
                                    z-[2]  
                                    h-28
                                    w-full
                                    bg-[linear-gradient(to_top,rgba(0,0,0,0.8),transparent)]
                                    '>
                            <h1
                                className='font-bold text-lg text-center text-white '>
                                {product.titleProduct}</h1>
                            <p
                                className='text-xs text-white text-center'
                            >
                                {convertNumberToReal(product.price)}</p>

                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CardProduct
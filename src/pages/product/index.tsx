import { doc, getDoc } from 'firebase/firestore'
import { useNavigate, useParams } from 'react-router-dom'
import { db, storage } from '../../utils/data/firebase/config';
import { getDownloadURL, ref } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { CartState, productFormData } from '../menu/types/types';
import { calcNewPrice } from '../../utils/functions/convetFunctions';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../store';
import Navbar from '../../components/navbar';
import { Loading } from '../../components/loading';



const ProductPage = () => {
    const { productId } = useParams()
    const [dataProduct, setDataProduct] = useState<productFormData>()
    const [loading, setLoading] = useState(false)
    const getProductId = async () => {
        setLoading(true)
        if (typeof productId !== 'string') return
        const docRef = doc(db, 'cardapio', productId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const downloadUrl = await getDownloadURL(
                ref(storage, `image/${productId}`)
            )
            setLoading(false)
            return { ...docSnap.data(), image: downloadUrl } as productFormData;
        }
        return undefined
        setLoading(false)
    }
    useEffect(() => {
        getProductId().then((data) => setDataProduct(data))
    }, [])








    const cart = useSelector((state: CartState) => state.cart, shallowEqual)


    const navigation = useNavigate()

    const minQuantify = 1


    const dispatch = useDispatch()

    const [quantifyProduct, setQuantifyProduct] = useState(minQuantify)

    const handleIncrement = () => {

        setQuantifyProduct((quantify) => quantify + 1)
    }
    const handleDecrement = () => {
        setQuantifyProduct((quantify) => quantify === minQuantify ? quantify : quantify - 1)
    }
    const clickAddProduct = () => {
        if (!dataProduct) {
            return
        }
        const { price, titleProduct, id, category, favorite } = dataProduct
        if (cart[dataProduct.category]) {

            if (cart[dataProduct.category].find((item) => item.id === id)) {
                window.alert('Produto já adicionado')
                return
            }



        }
        console.log(productId)
        dispatch(addCart(
            category, { price, titleProduct, quantify: quantifyProduct, id: productId, favorite }))
        navigation('/cart')

    }
    const clickNavigationMenu = () => {
        navigation('/menu')
    }


    return (
        <div className={`
        grid 
        grid-cols-1 
        md:${loading ? ' grid-cols-1' : 'grid-cols-2'} 
        w-full 
        bg-red-500 
        flex-1
        lg:h-screen ${loading ? '' : 'pt-[80px]'}`}>
            <Navbar />
            {loading ?
                <Loading /> :
                <>
                    <div
                        className='h-full w-full flex justify-center items-center  '>
                        {dataProduct?.image &&
                            <img
                                src={dataProduct.image}
                                className='h-96 w-96 rounded-lg'></img>}
                    </div>
                    <div
                        className='
            flex 
            flex-col  
            items-center 
            gap-2 
            font-dancing 
            text-white
            p-20'>
                        <h1 className='text-3xl'>{dataProduct?.titleProduct}</h1>
                        <h3 className='text-1xl '>{dataProduct?.description}</h3>
                        <p className='font-bold'>
                            {calcNewPrice(quantifyProduct, dataProduct?.price)}</p>

                        <div className='flex flex-row justify-center items-center text-[12px] '>
                            <button onClick={handleDecrement}
                                className='
                            text-white 
                            rounded-full
                            bg-blue-400 
                            w-5 
                            h-5
                            hover:bg-blue-500 
                            flex 
                            items-center 
                            justify-center 
                            p-[14px] 
                            font-bold
                            text-[15px]'>-</button>
                            <h2
                                className='
                            font-bold 
                            text-white 
                            mx-5'>Quantidade: {quantifyProduct}</h2>

                            <button onClick={handleIncrement}
                                className='
                            text-white 
                            rounded-full 
                            bg-blue-400 
                            w-5 
                            h-5 
                            hover:bg-blue-500 
                            flex 
                            items-center 
                            justify-center 
                            p-[14px] 
                            font-bold
                            text-[15px]'>+</button>
                        </div>
                        <div className='w-full flex flex-col justify-between items-center gap-3'>
                            <button
                                className='
                    font-bold
                    text-white 
                    text-[12px]
                    bg-blue-400 
                    hover:bg-blue-500 
                    p-2 
                    
                    rounded-lg'
                                onClick={clickAddProduct}>Adicionar</button>
                            <button className='
                    border-white
                    border 
                    border-solid 
                    font-bold 
                    text-[12px] 
                    text-white 
                    bg-red-400 
                    hover:bg-blue-500 
                    p-2 
                    rounded-lg
                  ' onClick={clickNavigationMenu}>Ir para o Menu</button>

                        </div>



                    </div>
                </>
            }

        </div>
    )
}

export default ProductPage;
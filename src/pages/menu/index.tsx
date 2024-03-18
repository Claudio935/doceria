import { useState } from 'react';
import { Loading } from '../../components/loading';
import Navbar from '../../components/navbar';

import {
    findCategory,
    findArrayPerCategory,
    useProductData
} from '../../utils/functions/dataFunctions';
import ProductList from './product';



const Menu = () => {

    const { productArray, loading } = useProductData({})
    const [mouseInImage, setmouseInImage] = useState('')
    const [animationImage, setAnimationImage] = useState('')




    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const noProduct = require('../../assets/image/semProduto.png')


    const handleMouseIn = (image: string | null) => {
        if (mouseInImage === image) return
        if (typeof image === 'string') {
            setAnimationImage('animate-rotate-in')

            setmouseInImage(image)
        }
        setTimeout(() => {
            setAnimationImage('')

        }, 600);

    }

    if (loading) {
        return (
            <div className='w-full h-screen bg-red-400'>
                <Loading />
            </div>
        )
    }
    return (
        <div className="
        md:grid
        md:grid-cols-2
        bg-red-400
        py-10 
        bg-scroll 
        px-6
        h-[calc(100vh_-_80px)]
        mt-20 
        bg-cover 
        bg-no-repeat"
        >
            <Navbar />
            <div className=" rounded-lg pt-5 animate-fade-in overflow-auto h-full
            p-2 bg-white">

                <h1
                    className='
                         text-red-400 
                         font-bold 
                         text-5xl
                        text-center
                         font-dancing'>Menu</h1>
                {findCategory(productArray).map((category, keyOne) => {
                    return (
                        <ProductList
                            key={keyOne}
                            category={category}
                            products={findArrayPerCategory(productArray, category)}
                            handleMouseIn={handleMouseIn}
                        />
                    )

                }

                )}
            </div>
            <div
                className={`
            fixed 
            right-1/4 
            top-[80px]
            translate-x-1/2 
            hidden
            md:flex
            w-1/2
            items-center
            flex-col
            justify-center
            h-[calc(100%_-_80px)]
            `}

            >

                {mouseInImage ?
                    <img src={mouseInImage}
                        className={`
                        rounded-full 
                        h-96 
                        w-96 
                        object-cover
                        shadow-2xl
                        shadow-red-700
                        ${animationImage}`}
                    ></img>
                    :
                    <img src={noProduct}
                        className={`
                        rounded-full 
                        h-96 
                        w-96 
                        object-cover
                        shadow-2xl
                        shadow-red-700
                       `}
                    ></img>

                }

            </div>
        </div >
    )
};

export default Menu
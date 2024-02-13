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


    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const fundoMenu = require('../../assets/image/fundoMenu.png')


    if (loading) {
        return (<Loading />)
    }
    return (
        <div className="
        flex-1 
        bg-red-400
        px-11
        lg:px-48
        xl:px-72 
        py-20 
        bg-scroll 
        min-h-screen 
        mt-20 
        bg-cover 
        bg-no-repeat"
            style={{ backgroundImage: `url(${fundoMenu})`, backgroundAttachment: 'fixed' }}>
            <Navbar />
            <div className='bg-white rounded-lg pt-5 animate-fade-in'>
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
                            products={findArrayPerCategory(productArray, category)} />
                    )

                }

                )}
            </div>
        </div>
    )
};

export default Menu
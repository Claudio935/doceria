import Navbar from '../../components/navbar';

import {
    findCategory,
    findArrayPerCategory,
    useProductData
} from '../../utils/functions/dataFunctions';
import ProductList from './product';



const Menu = () => {

    const { productArray } = useProductData()


    return (
        <div className="flex-1 bg-red-400 px-72 bg-scroll min-h-screen mt-20">
            <Navbar />
            <div className='bg-white rounded-lg '>
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
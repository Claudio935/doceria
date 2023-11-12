import Navbar from '../../components/navbar';
import { productCaseirinhos } from './data';
import ProductList from './product';

const Menu = () => {

    return (
        <div className="flex-1 bg-red-400 p-5 bg-scroll min-h-screen mt-20">
            <Navbar />
            <div className='bg-white rounded-lg '>
                {productCaseirinhos.map((category, index) => {
                    return <ProductList products={category.products} titleCategory={category.titleCategory} sizeProduct={category.sizeProduct} key={index} />
                })}
            </div>
        </div>
    )
};

export default Menu
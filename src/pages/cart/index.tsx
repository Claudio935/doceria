
import Section from './section';
import Navbar from '../../components/navbar';
import FormCart from './form';


const Cart = () => {



    return (
        <div className="bg-red-400 md:grid md:grid-cols-2 p-4  min-h-screen">
            <Navbar />
            <Section />
            <FormCart />

        </div>
    )
}

export default Cart
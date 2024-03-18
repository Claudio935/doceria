
import Section from './section';
import Navbar from '../../components/navbar';
import FormCart from './form';
import { ModalError } from '../../components/modalError';


const Cart = () => {



    return (
        <div className="bg-red-400 md:grid md:grid-cols-2 p-4  min-h-screen">
            <Navbar />
            <Section />
            <FormCart />
            <ModalError />
        </div>
    )
}

export default Cart
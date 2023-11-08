import { listCategory } from '../../../utils/data';
import Card from './Card';

const Section = () => {


    return (

        <div className='flex flex-col items-center justify-center mt-20'>
            {listCategory.map((item, index) =>
            (<div key={index} className='border-b-2 border-white border-solid '>
                <h1 className='font-bold text-white text-[25px]'>{item}</h1>
                <Card categoryValues={item} />

            </div>
            )
            )}
        </div>

    )
}

export default Section;
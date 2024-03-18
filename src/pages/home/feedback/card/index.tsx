import { commentData } from '../../../menu/types/types'


const Card: React.FC<commentData> = ({ image, name, comment }) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const userImageNotFound = require('../../../../assets/image/userComment.png')
    return (
        <div
            className="
            shadow-xl
            shadow-red-300
            rounded-lg 
            p-10 
            bg-white 
            w-auto  
            items-center 
            flex 
            justify-start 
            flex-col  
            gap-8
            h-96">
            <div className="flex flex-col items-center justify-center">
                {typeof image === 'string' ?
                    <img src={image} className="w-16 h-16 rounded-full object-cover mb-5" /> :
                    <img
                        src={userImageNotFound}
                        className="w-16 h-16 rounded-full object-cover mb-5" />}
                <h4 className="text-[20px]  font-bold font-dancing">{name}</h4>
            </div>
            <h5
                className="text-[14px] 
            text-justify 
            font-medium
            w-56"
            >{comment}</h5>

        </div>
    )
}

export default Card
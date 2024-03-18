import { useRef } from 'react'
import Card from './card'
import { useCommentData } from '../../../utils/functions/dataFunctions';


const Feedback = () => {
    const refContainerScroll = useRef<HTMLDivElement>(null);

    const { commentArray } = useCommentData({})

    const scrollToLeftMyRef = () => {

        if (refContainerScroll?.current) {
            refContainerScroll.current.scrollLeft -= 100
        }
    }
    const scrollToRightMyRef = () => {
        if (refContainerScroll?.current) {
            refContainerScroll.current.scrollLeft += 100
        }
    }


    return (
        <div className="  flex items-center relative  justify-center animate-fade-in md:px-20">
            <button
                className='
            rounded-full 
            absolute
            md:ml-16
            top-[50%]  
            left-0
            bg-red-400 
            text-white 
            h-8 
            w-8 
            hover:bg-blue-400
            ' onClick={() => scrollToLeftMyRef()}>{'<'}</button>
            <div
                ref={refContainerScroll}
                className='
                grid
                grid-flow-col 
                auto-cols-max 
                mx-8  
                overflow-x-hidden 
                gap-2 
                items-center
                [&>*:nth-child(odd)]:bg-red-400
                [&>*:nth-child(odd)]:text-white
                py-10
                '>
                {
                    commentArray.map((comment) => {
                        return (<Card
                            id={comment.id}
                            key={comment.id}
                            comment={comment.comment}
                            image={comment.image}
                            name={comment.name}
                        />)
                    })
                }
            </div>
            <button
                className='
            rounded-full 
            absolute 
            right-0 
            md:mr-16
            top-[50%] 
            bg-red-400 
            text-white 
            h-8 
            w-8 
            hover:bg-blue-400' onClick={() => scrollToRightMyRef()}>{'>'}</button>
        </div>
    )
}

export default Feedback
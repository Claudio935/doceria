import { useRef } from 'react'
import Card from './card'


const Feedback = () => {
    const refContainerScroll = useRef<HTMLDivElement>(null);

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
        <div className="d:m-20 m-5  flex items-center relative  justify-center">
            <button className='rounded-full absolute top-[50%]  left-0 bg-red-400 text-white h-8 w-8 hover:bg-blue-400' onClick={() => scrollToLeftMyRef()}>{'<'}</button>
            <div ref={refContainerScroll} className='grid grid-flow-col auto-cols-max mx-8  overflow-x-hidden gap-2 items-center'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <button className='rounded-full absolute right-0 top-[50%] bg-red-400 text-white h-8 w-8 hover:bg-blue-400' onClick={() => scrollToRightMyRef()}>{'>'}</button>
        </div>
    )
}

export default Feedback
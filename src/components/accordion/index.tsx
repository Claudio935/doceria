import { useState } from 'react'

interface PropsAccordion {
    title: string,
    subtitle: string,
    content: string,
    onClose: () => void
}

export const Accordion: React.FC<PropsAccordion> = ({ title, subtitle, content, onClose }) => {

    const [openAccordion, setOpenAccordion] = useState(false)

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const arrowDown = require('../../assets/icones/arrowDown.png')

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const close = require('../../assets/icones/close.png')
    return (
        <div
            className={`
        ${openAccordion ?
                    'max-h-96' :
                    'max-h-10'} 
                    transition-all 
                    duration-50000 
                    bg-white 
                    rounded-lg 
                    p-2
                    overflow-hidden`}
        >
            <div className='flex flex-row justify-between items-center mb-2'>
                <h1 className='text-red-500 font-serif font-bold'>
                    {title}
                </h1>
                <div className='flex w-10 items-center justify-between'>
                    <img
                        src={arrowDown}
                        className={`${openAccordion ? 'rotate-180' : ''} 
                        transition-all 
                        duration-700 
                        cursor-pointer`}
                        onClick={() => setOpenAccordion((status) => !status)} />
                    <img
                        src={close}
                        className={`
                        transition-all 
                        duration-700 
                        cursor-pointer`}
                        onClick={() => onClose()} />
                </div>
            </div>
            <div
                className={`
                         bg-gray-500 
                         rounded-lg 
                         p-4
                         flex
                         flex-col
                         text-white
                         transition-all 
                         duration-100
                         `}>
                <h4 className={'text-xs font-bold'}>
                    {subtitle}
                </h4>
                <h1 className={'font-medium'}>
                    {content}
                </h1>
            </div>
        </div>
    )
}
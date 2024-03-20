import { useEffect, useRef, useState } from 'react'


type Props = {

    handleChange: (e: File | null) => void
}


export const DropZone = ({ handleChange }: Props) => {
    const [image, setImage] = useState<File | null>()

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const dropZoneChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()

        if (event.target.files) {
            handleChange(event.target.files[0])
            setImage(event.target.files[0])
        }
    }
    const handleDeleteImage = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()

        if (fileInputRef.current) {
            fileInputRef.current.value = '';

        }
        handleChange(null)
        setImage(null)

    }

    return (
        <div
            className='flex items-center justify-center w-full min-full h-full'>
            <label
                htmlFor='dropzone-file'
                className='
        flex 
        flex-col
        items-center 
        justify-center 
        w-full 
        h-48 
        border-2 
        borde-red-300 
        border-dashed 
        rounded-lg 
        cursor-pointer 
        bg-red-50
        hover:bg-red-100'
            >
                <div
                    className='
                    flex 
                    flex-col 
                    items-center 
                    justify-center 
                    pt-5 
                    pb-6 
                    '>
                    <svg
                        className='w-8 h-8 mb-4 text-red-500'
                        aria-hidden='true' xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 20 16'>
                        <path
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            // eslint-disable-next-line max-len
                            d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2' />
                    </svg>
                    {!image ?

                        <p
                            className='
                    mb-2 
                    text-[12px] text-red-500 flex flex-col items-center  p-[10px] '>
                            <span
                                className='font-semibold '>Click para fazer Uplado da imagem
                            </span > ou puxe a imagem aqui</p>


                        :
                        <>
                            <p
                                className='
                                text-red-500  
                                mb-2 
                                p-[10px] 
                                text-[11px]  
                                text-center'>{image.name}</p>
                            <button className='
                            text-[11px] 
                            text-red-600 
                            font-bold 
                            border-2 
                            border-red-500 
                            border-dashed
                            p-2' onClick={handleDeleteImage}>Excluir img</button>
                        </>}
                </div>
                <input
                    ref={fileInputRef}
                    id='dropzone-file'
                    type='file'
                    accept="image/*"
                    className='hidden'
                    onChange={dropZoneChangeImage}

                />
            </label>
        </div>

    )
}
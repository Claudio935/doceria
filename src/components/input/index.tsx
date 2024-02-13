import React, { InputHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name?: string
    className?: string
    label?: string
    labelClass?: string
    color?: string
    register?: UseFormRegisterReturn<string>
    error?: string
}

export const Input: React.FC<InputProps> = ({
    register,
    color,
    name,
    label,
    error,
    ...rest }) => {
    const inputClassName = `
    w-full 
    rounded-lg 
    p-3 
    outline-none 
    focus:shadow-red-500
    focus:shadow-[0px_0px_5px_3px_rgba(0,0,0,0.3)]
    border-${color === 'red' ? 'red-400' : ''}
    border-2
    border-solid
    `
    const labelClassName = `
    text-${color === 'red' ? 'red-400' : 'white'} 
    w-full 
    text-start
    font-bold
    mb-[8px]
    `
    return (
        <div className='h-[140px] w-full flex flex-col gap-[8px]'>
            <label className={labelClassName} htmlFor={name}>{label}</label>
            <input id={name} className={inputClassName} {...rest} {...register} />
            {error && <span className='text-red-800 font-bold'>{error}</span>}
        </div>
    )
}
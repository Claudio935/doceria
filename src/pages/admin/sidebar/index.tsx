import { NavLink } from 'react-router-dom'

const Sidebar = () => {


    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const produtoAdd = require('../../../assets/icones/produtoAdd.png')

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const comentarios = require('../../../assets/icones/comentarios.png')

    return (
        <div className="
        w-12
        fixed 
        left-0 
        h-screen 
        z-10 
        pt-[80px] 
        px-1
        bg-white
        shadow-lg">
            <ul className="flex items-center justify-center flex-col gap-6 mt-5">
                <NavLink
                    end
                    className={({ isActive }) =>

                        [

                            'border-l-4',
                            'transition-all',
                            'duration-700',
                            isActive ? ' border-red-300' :
                                'border-transparent  '].join(' ')


                    }
                    to='/admin' >
                    <img src={produtoAdd} className='ml-1 h-[20px] w-[20px]' />
                </NavLink>
                <NavLink
                    className={({ isActive, }) =>


                        [

                            'border-l-4',
                            'transition-all',
                            'duration-700',
                            isActive ? ' border-red-300' :
                                'border-transparent  '].join(' ')


                    }
                    to='/admin/addComentario'
                >
                    <img src={comentarios} className='ml-1 h-[20px] w-[20px]' />
                </NavLink>
            </ul>
        </div>
    )
}
export default Sidebar

type PropsModal = {
    open: boolean
}

const NavbarModal = ({ open }: PropsModal) => {

    return (
        <>
            {open ? <div
                className="
            fixed 
            top-20 
            right-3 
            w-40 
            h-40 
            bg-red-400 
            flex 
            flex-col 
            items-center 
            justify-between 
            rounded-md mt-3">
                <ul >
                    <li>
                        <a href="#"
                            className="
                        block 
                        py-2 
                        pl-3 
                        pr-4 
                        text-white 
                        font-bold 
                        hover:text-blue-400"
                        >inicío</a>
                    </li>
                    <li>
                        <a
                            href="#menu"
                            className="
                        block 
                        py-2 
                        pl-3 
                        pr-4  
                        text-white ]
                        font-bold 
                        hover:text-blue-400">Cardápio</a>
                    </li>
                    <li>
                        <a
                            href="#feedback"
                            className="
                        block 
                        py-2 
                        pl-3 
                        pr-4 
                        text-white 
                        font-bold 
                        hover:text-blue-400">FeedBack</a>
                    </li>
                </ul>
            </div> : <></>}
        </>
    )
}

export default NavbarModal
import { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useCommentData } from '../../../utils/functions/dataFunctions'
import Navbar from '../../../components/navbar'
import AccordionList from './card'
import FormComment from './form'

const AddComment = () => {

    const [login, setLogin] = useState(true)

    const { commentArray, addComment, loading, deleteComment } = useCommentData({})

    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                setLogin(true)

            } else {
                setLogin(false)
            }
        });
    }, [])
    if (!login) {
        return (
            <div className="
        bg-red-400 
        min-h-screen 
        min-w-full 
        flex 
        items-center
        justify-center 
        flex-col
        ">
                <Navbar />
                <div className='
            flex
            flex-col 
            items-center 
            justify-center
            w-full
            h-full
           '>
                    <h1 className='text-white font-bold text-3xl'>Usuário não logado</h1>
                </div>

            </div>
        )
    }
    return (

        <div className="
            bg-red-400 
            min-h-screen 
            min-w-full 
            flex 
            items-center
            justify-center 
            flex-col
            ">

            <FormComment addCommentFunction={addComment} />
            <div className='
                w-full 
                md:w-1/2 
                md:h-[calc(100%_-_80px)] 
                md:absolute 
                md:top-[80px] 
                md:right-0 
                p-5 
                pl-12
                overflow-y-auto'>
                <AccordionList
                    commentArray={commentArray}
                    loading={loading}
                    deleteFunction={deleteComment} />

            </div>
        </ div>
    )

}

export default AddComment
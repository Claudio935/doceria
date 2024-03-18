import { commentData } from '../../../menu/types/types'
import { Accordion } from '../../../../components/accordion'
import { Loading } from '../../../../components/loading'


interface AccordionListProps {
    commentArray: commentData[]
    deleteFunction: (id: string) => void
    loading: boolean

}

const AccordionList: React.FC<AccordionListProps> = ({ commentArray, deleteFunction, loading }) => {



    if (loading)
        return (
            <Loading />
        )

    return (

        <div className='flex flex-col gap-2'>
            {commentArray.map((comment) => {
                return (
                    <Accordion
                        key={comment.id}
                        title={comment.name}
                        subtitle={`Profissão: ${comment.job ? comment.job : ''}`}
                        content={comment.comment}
                        onClose={() => deleteFunction(comment.id)}
                    />


                )
            })}
        </div>

    )
}

export default AccordionList
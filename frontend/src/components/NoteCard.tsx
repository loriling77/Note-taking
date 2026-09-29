import { useNavigate } from 'react-router-dom'
import '../styles/MainPage.css'
export type Note = {
    id: number
    title: string
    tag: string
    body: string

}

type NoteCardProps = {
    id: number
    title: string
    tag: string
}

export default function NoteCard({
    id,
    title,
    tag
}: NoteCardProps) {

    const navigate = useNavigate()

    const goToNoteDetail = () => {
        navigate(`/note/${id}`)
    }

    return (
        <div
            className='noteCard'
            onClick={goToNoteDetail}
        >
            <h3>{title}</h3>
            <span className='noteTag'>{tag}</span>
        </div>
    )
}
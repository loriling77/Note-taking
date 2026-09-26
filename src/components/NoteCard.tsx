import type { TagProps } from './Tags'
import type { TitleProps } from './Title'
import { useNavigate } from 'react-router-dom'

export type TitleTagProps = TitleProps & TagProps

export default function NoteCard({ title, tag }: TitleTagProps) {
    const navigate = useNavigate()
    const goToNoteDetail = () => {
        navigate('./note')

    }
    return (
        <>
            <div className="noteCard" onClick={goToNoteDetail}>
                <h3>{title}</h3>
                <span className="noteTag">{tag}</span>
            </div></>
    )
}

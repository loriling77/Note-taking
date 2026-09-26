import type { TagProps } from './Tags'
import type { TitleProps } from './Title'

type TitleTagProps = TitleProps & TagProps

export default function NoteCard({ title, tag }: TitleTagProps) {

    const goToDetail = () => {

    }
    return (
        <>
            <div className="noteCard" onClick={goToDetail}>
                <h3>{title}</h3>
                <span className="noteTag">{tag}</span>
            </div></>
    )
}

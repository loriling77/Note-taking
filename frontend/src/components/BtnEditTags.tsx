
import EditTagPopup from './EditTagPopup'
import type { EditTagPopupProps, TagListProps } from './EditTagPopup'

type EditTagsProps = {
    tags: TagListProps[]
    title: string
    showPopup: boolean
    setShowPopup: React.Dispatch<React.SetStateAction<boolean>>

} & EditTagPopupProps

export default function EditTags({ tags, setShowPopup, showPopup, setTags }: EditTagsProps) {




    return (
        <>
            <button
                className='btn-editTags'
                onClick={() => setShowPopup(!showPopup)}
            >
                Edit Tags
            </button>


            <EditTagPopup
                tags={tags} setTags={setTags} setShowPopup={setShowPopup}
            />

        </>
    )
}
import '../styles/EditTagPopup.css'
import { useState } from 'react'

export type TagListProps = {
    id: number
    tag: string
}

export type EditTagPopupProps = {
    tags: TagListProps[]
    setTags: React.Dispatch<React.SetStateAction<TagListProps[]>>
    setShowPopup: React.Dispatch<React.SetStateAction<boolean>>
}

export default function EditTagPopup({
    tags,
    setTags,
    setShowPopup
}: EditTagPopupProps) {

    // 当前正在编辑哪个 tag
    const [editingId, setEditingId] = useState<number | null>(null)

    // input 中正在输入的内容
    const [editedTag, setEditedTag] = useState('')

    // 点击 Edit
    const handleEdit = (item: TagListProps) => {
        setEditingId(item.id)
        setEditedTag(item.tag)
    }

    // 点击 Save
    const handleSave = (id: number) => {
        if (editedTag.trim() === '') {
            alert('Tag cannot be empty!')
            return
        }

        setTags(
            tags.map((item) =>
                item.id === id
                    ? { ...item, tag: editedTag }
                    : item
            )
        )

        setEditingId(null)
        setEditedTag('')
    }

    // 点击 Delete
    const handleDelete = (id: number) => {
        setTags(
            tags.filter((item) => item.id !== id)
        )
    }

    // 关闭 Popup
    const handleClose = () => {
        setShowPopup(false)
    }

    return (
        <div className="popup-overlay">

            <div className="edit-tag-popup">

                <div className="popup-header">

                    <h2>Edit Tags</h2>

                    <button
                        className="btn-x"
                        onClick={handleClose}
                    >
                        ×
                    </button>

                </div>

                {tags.map((item) => (

                    <div
                        className="tag-row"
                        key={item.id}
                    >

                        <span className="tag-name">

                            {editingId === item.id ? (

                                <input
                                    type="text"
                                    value={editedTag}
                                    onChange={(e) =>
                                        setEditedTag(e.target.value)
                                    }
                                />

                            ) : (

                                item.tag

                            )}

                        </span>

                        <div className="tag-actions">

                            {editingId === item.id ? (

                                <button
                                    className="btn-edit-tag"
                                    onClick={() => handleSave(item.id)}
                                >
                                    Save
                                </button>

                            ) : (

                                <button
                                    className="btn-edit-tag"
                                    onClick={() => handleEdit(item)}
                                >
                                    Edit
                                </button>

                            )}

                            <button
                                className="btn-delete-tag"
                                onClick={() => handleDelete(item.id)}
                            >
                                Delete
                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    )
}
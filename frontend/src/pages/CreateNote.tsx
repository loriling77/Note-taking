import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Title from '../components/Title'
import Tags from '../components/Tags'
import BodyText from '../components/BodyText'
import PreviewText from '../components/PreviewText'

import type { Note } from '../components/NoteCard'
import type { TagListProps } from '../components/EditTagPopup'
import ReactMarkdown from 'react-markdown'

type CreateNoteProps = {
    notes: Note[]
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
    tags: TagListProps[]
    setTags: React.Dispatch<React.SetStateAction<TagListProps[]>>
}

export default function CreateNote({
    notes,
    setNotes,
    tags,
    setTags
}: CreateNoteProps) {

    const [title, setTitle] = useState('')
    const [tag, setTag] = useState('')
    const [body, setBody] = useState('')

    const navigate = useNavigate()

    const handleBack = () => {
        navigate('/')
    }

    const handleSubmit = () => {

        if (title.trim() === '') {
            alert('Title is empty, please input Title!')
            return
        }

        if (tag.trim() === '') {
            alert('Tag is empty, please input Tag!')
            return
        }

        if (body.trim() === '') {
            alert('Body is empty, please input Body!')
            return
        }

        const newNote: Note = {
            id: Date.now(),
            title,
            tag,
            body
        }

        setNotes(prevNotes => [
            ...prevNotes,
            newNote
        ])

        const tagExists = tags.some(
            item =>
                item.tag.toLowerCase() ===
                tag.trim().toLowerCase()
        )

        if (!tagExists) {

            const newTag: TagListProps = {
                id: Date.now(),
                tag: tag.trim()
            }

            setTags(prevTags => [
                ...prevTags,
                newTag
            ])
        }

        navigate('/')
    }

    return (
        <div className="big-box">

            <div className="title-tags">

                <div>
                    <Title
                        title={title}
                        setTitle={setTitle}
                    />

                    <Tags
                        tag={tag}
                        setTag={setTag}
                    />
                </div>

                <button
                    className="btn-back"
                    onClick={handleBack}
                >
                    Back
                </button>

            </div>

            <div className="body-preview-container">

                <div className="body-editor">

                    <BodyText
                        body={body}
                        setBody={setBody}
                    />

                </div>

                <div className="body-preview">
                    <PreviewText
                        body={body}
                    />
                </div>

            </div>

            <button
                className="btn-submit"
                onClick={handleSubmit}
            >
                Submit
            </button>

        </div>
    )
}
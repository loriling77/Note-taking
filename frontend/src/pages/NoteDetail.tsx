import { useParams, useNavigate } from 'react-router-dom'
import type { Note } from '../components/NoteCard'
import PreviewBody from '../components/PreviewBody'
import Body from '../components/Body'


import '../styles/NoteDetail.css'
import { useState } from 'react'

export type NoteDetailProps = {
    notes: Note[]
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>

}

export default function NoteDetail({
    notes
}: NoteDetailProps) {

    const { id } = useParams()
    const navigate = useNavigate()

    const note = notes.find(
        (note) => note.id === Number(id)
    )

    const [body, setBody] = useState(note?.body ?? '')

    if (!note) {
        return (
            <div className="note-not-found">
                <h2>Note not found</h2>

                <button
                    className="btn-back"
                    onClick={() => navigate('/')}
                >
                    Back to Notes
                </button>
            </div>
        )
    }

    const [clickEditNote, setClickEditNote] = useState<boolean>(false)

    return (
        <div className="note-detail-page">

            <div className="note-detail-topbar">
                <button
                    className="btn-back"
                    onClick={() => navigate(-1)}
                >
                    ← Back
                </button>

                <span className="note-detail-label">
                    Note Detail
                </span>
            </div>

            <div className="note-detail-card">

                <div className="note-detail-heading">

                    <div>
                        <h1>{note.title}</h1>

                        <span className="note-detail-tag">
                            {note.tag}
                        </span>
                    </div>

                    <div className="note-detail-actions">
                        {clickEditNote ? (
                            <button className="btn-edit-note" onClick={() => setClickEditNote(!clickEditNote)}>
                                Save
                            </button>
                        ) : (
                            <button className="btn-edit-note" onClick={() => setClickEditNote(!clickEditNote)}>
                                Edit
                            </button>
                        )}


                        <button className="btn-delete-note">
                            Delete
                        </button>
                    </div>

                </div>

                <div className="note-divider" />

                <div className="note-detail-body">
                    {clickEditNote ? (<Body body={body} setBody={setBody} ></Body>) : (<PreviewBody body={note.body}></PreviewBody>)}

                </div>

            </div>

        </div>
    )
}
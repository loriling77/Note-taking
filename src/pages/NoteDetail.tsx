
import '../styles/NoteDetail.css'
export type NoteDetailProps = {
    title: string,
    tag: string,
    body: string

}

export default function NoteDetail({ title, tag, body }: NoteDetailProps) {

    return (
        <>
            <div className="note-detail">

                <div className="note-detail-header">

                    <div className="note-detail-title">
                        <h1>{title}</h1>
                        <span className="note-detail-tag">
                            {tag}
                        </span>
                    </div>

                    <div className="note-detail-actions">
                        <button className="btn-edit">
                            Edit
                        </button>

                        <button className="btn-delete-note">
                            Delete
                        </button>

                        <button className="btn-back">
                            Back
                        </button>
                    </div>

                </div>

                <div className="note-detail-body">
                    <p>{body}</p>
                </div>

            </div>
        </>
    )
}
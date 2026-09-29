import { useState } from 'react'

import Create from '../components/BtnCreate'
import EditTagPopup from '../components/EditTagPopup'
import NoteCard from '../components/NoteCard'

import '../styles/App.css'

import type { Note } from '../components/NoteCard'
import type { TagListProps } from '../components/EditTagPopup'



export type HomeProps = {
    notes: Note[]
    tags: TagListProps[]
    setTags: React.Dispatch<React.SetStateAction<TagListProps[]>>
}

function Home({ notes,
    tags,
    setTags }: HomeProps) {

    const [showPopup, setShowPopup] = useState(false)



    return (
        <div className="big-box">

            <div className="header">

                <h1>My Notes</h1>

                <div className="create-edit">

                    <Create />

                    <button
                        onClick={() => setShowPopup(true)}
                    >
                        Edit Tags
                    </button>

                </div>

            </div>

            {showPopup && (
                <EditTagPopup
                    tags={tags}
                    setTags={setTags}
                    setShowPopup={setShowPopup}
                />
            )}

            <div className="notes-container">

                {notes.map((note) => (
                    <NoteCard
                        key={note.id}
                        id={note.id}
                        title={note.title}
                        tag={note.tag}
                    />
                ))}

            </div>



        </div>
    )
}

export default Home
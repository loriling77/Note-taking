import Home from './pages/Home'
import CreateNote from './pages/CreateNote'
import NoteDetail from './pages/NoteDetail'

import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

import type { Note } from './components/NoteCard'
import type { TagListProps } from './components/EditTagPopup'

function App() {

    const [notes, setNotes] = useState<Note[]>([])
    const [tags, setTags] = useState<TagListProps[]>([])

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await fetch(
                    "http://localhost:5000/api/notes"
                )
                const data = await response.json()
                setNotes(data)
            } catch (error) { console.error(error) }
        }
        fetchNotes()

    }, [])

    return (
        <Routes>

            <Route
                path="/"
                element={
                    <Home
                        notes={notes}
                        tags={tags}
                        setTags={setTags}
                    />
                }
            />

            <Route
                path="/create"
                element={
                    <CreateNote
                        notes={notes}
                        setNotes={setNotes}
                        tags={tags}
                        setTags={setTags}
                    />
                }
            />

            <Route
                path="/note/:id"
                element={
                    <NoteDetail
                        notes={notes}
                        setNotes={setNotes}
                    />
                }
            />

        </Routes>
    )
}

export default App
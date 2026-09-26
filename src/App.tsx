

import Home from './pages/Home'

import CreateNote from './pages/CreateNote'

import NoteDetail from './pages/NoteDetail'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'








function App() {

    const [title, setTitle] = useState<string>('')
    const [tag, setTag] = useState<string>('')

    const [body, setBody] = useState<string>('')




    return (
        <Routes>
            <Route path='/' element={<Home title={title} tag={tag} body={body} setTag={setTag} setTitle={setTitle} setBody={setBody} />} />
            <Route path='/create' element={<CreateNote title={title} tag={tag} body={body} setTag={setTag} setTitle={setTitle} setBody={setBody} />} />
            <Route path='/note' element={<NoteDetail title={title} tag={tag} body={body} />} />
        </Routes>


    )
}

export default App

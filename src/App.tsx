
import Create from './components/BtnCreate'
import EditTags from './components/BtnEditTags'
import Title from './components/Title'
import Tags from './components/Tags'
import Body from './components/Body'
import './styles/App.css'
import { useState } from 'react'




function App() {
    const [title, setTitle] = useState<string>('')
    const [tag, setTag] = useState<string>('')
    const [create, setCreate] = useState<boolean>(false)




    return (
        <div className='big-box'>
            <div className='header'>
                <h1>Notes</h1>
                <div className='create-edit'>
                    <Create setCreate={setCreate}></Create>
                    <EditTags></EditTags>
                </div>

            </div>
            <div className='title-tags'>
                <Title title={title} setTitle={setTitle}></Title>
                <Tags tag={tag} setTag={setTag}></Tags>
            </div>
            {create ? (<Body title={title} tag={tag} setTitle={setTitle} setTag={setTag} />) :
                (<div className='box'>
                    <Body title={title} tag={tag} setTitle={setTitle} setTag={setTag} ></Body>
                </div >)
            }




        </div >


    )
}

export default App

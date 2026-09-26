
import Create from '../components/BtnCreate'
import EditTags from '../components/BtnEditTags'
import Title from '../components/Title'
import Tags from '../components/Tags'
import Body from '../components/Body'
import '../styles/App.css'



export type HomeProps = {
    title: string
    setTitle: (value: string) => void

    tag: string
    setTag: (value: string) => void

    body: string
    setBody: (value: string) => void
}

function Home({ title, tag, body, setTag, setTitle, setBody }: HomeProps) {






    return (
        <div className='big-box'>
            <div className='header'>
                <h1>Notes</h1>
                <div className='create-edit'>
                    <Create ></Create>
                    <EditTags></EditTags>
                </div>

            </div>
            <div className='title-tags'>
                <Title title={title} setTitle={setTitle}></Title>
                <Tags tag={tag} setTag={setTag}></Tags>
            </div>
            <div className='box'>
                <Body title={title} tag={tag} setTitle={setTitle} setTag={setTag} body={body} setBody={setBody} ></Body>
            </div >





        </div >


    )
}

export default Home

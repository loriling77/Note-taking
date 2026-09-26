
import Create from '../components/BtnCreate'
import EditTags from '../components/BtnEditTags'
import Title from '../components/Title'
import Tags from '../components/Tags'
import Body from '../components/Body'
import '../styles/App.css'
import type { BodyTitleTagProps } from '../components/Body'
export default function CreateNote({ title, tag, body, setTitle, setTag, setBody }: BodyTitleTagProps) {


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
            <Body title={title} tag={tag} setTitle={setTitle} setTag={setTag} body={body} setBody={setBody} />






        </div >
    )

}
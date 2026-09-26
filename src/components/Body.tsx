import '../styles/MainPage.css'
import { useState } from 'react'
import NoteCard from './NoteCard'

import type { TitleTagProps } from './NoteCard'

type BodyProps = {
    body: string,
    setBody: (value: string) => void
}

export type BodyTitleTagProps = BodyProps & TitleTagProps



export default function Body({ title, tag, setTitle, setTag, body, setBody }: BodyTitleTagProps) {


    const [submitted, setSubmitted] = useState<boolean>(false)

    const handleSubmit = () => {
        if (title.trim() === '') {
            alert("Title is empty, please input Title!")
        }

        else if (tag.trim() === '') {
            alert('Tag is empty, please input Title!')
        }
        else if (body.trim() === '') {
            alert('Body is empty, please input body!')
        }

        else {
            setSubmitted(true)
        }

    }
    return (
        <>
            <div>

                {submitted ? (
                    <NoteCard title={title} tag={tag} setTitle={setTitle} setTag={setTag} ></NoteCard>
                ) : (
                    <div>
                        <h3>Body</h3>
                        <div>
                            <textarea className='body-box' placeholder='Enter your notes' value={body} onChange={(e) => setBody(e.target.value)} />
                        </div>
                        <button className='btn-submit' onClick={handleSubmit}>submit</button>
                    </div >


                )
                }
            </div >
        </>

    )
}
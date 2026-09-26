import '../styles/MainPage.css'
import EditTagPopup from './EditTagPopup.tsx'
import { useState } from 'react'


export default function BtnEditTags() {
    const [popup, setPopup] = useState<boolean>(false)

    const handlePopup = () => {
        setPopup(!popup)

    }
    return (
        <>
            <button className='btn-editTags' onClick={handlePopup}>Edit Tags</button>
            {popup && (<EditTagPopup handlePopup={handlePopup}></EditTagPopup>)}
        </>
    )
}
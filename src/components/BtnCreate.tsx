import '../styles/MainPage.css'

import { useNavigate } from 'react-router-dom'




export default function BtnCreate() {
    const navigate = useNavigate()
    const goToCreateNote = () => {

        navigate('./create')
    }


    return (
        <>
            <button className='btn-create' onClick={goToCreateNote} >Create
            </button>

        </>

    )
}
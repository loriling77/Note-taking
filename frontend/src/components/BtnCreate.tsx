import { useNavigate } from 'react-router-dom'
import '../styles/MainPage.css'

export default function Create() {
    const navigate = useNavigate()

    const goToCreateNote = () => {
        navigate('/create')
    }

    return (
        <button
            className='btn-create'
            onClick={goToCreateNote}
        >
            Create
        </button>
    )
}
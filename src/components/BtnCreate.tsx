import '../styles/MainPage.css'




type CreateProps = {
    setCreate: (value: boolean) => void
}
export default function BtnCreate({ setCreate }: CreateProps) {



    return (
        <>
            <button className='btn-create' onClick={() => setCreate(true)} >Create
            </button>

        </>

    )
}
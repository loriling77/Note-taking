import '../styles/MainPage.css'

export type TitleProps = {
    title: string,
    setTitle: (value: string) => void;
}
export default function Title({ title, setTitle }: TitleProps) {
    return (
        <>
            <div className='title-compo'>
                <h2>Title</h2>

                <input type="textbox" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
        </>
    )
}
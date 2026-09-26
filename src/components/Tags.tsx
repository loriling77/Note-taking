import '../styles/MainPage.css'

export type TagProps = {
    tag: string
    setTag: (value: string) => void
}
export default function Tags({ tag, setTag }: TagProps) {

    return (
        <>
            <div className='tag-compo'>
                <h2>Tags</h2>
                <input type="textbox" placeholder="Enter tags" value={tag} onChange={(e) => setTag(e.target.value)} />
            </div>

        </>
    )
}
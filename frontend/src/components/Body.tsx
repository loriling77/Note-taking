import '../styles/MainPage.css'


export type BodyProps = {
    body: string
    setBody: (value: string) => void
}

export default function Body({
    body,
    setBody
}: BodyProps) {

    return (
        <div>



            <textarea
                className="body-box"
                placeholder="Enter your notes"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />

        </div>
    )
}
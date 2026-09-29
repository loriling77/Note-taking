import ReactMarkdown from 'react-markdown'
import '../styles/MainPage.css'


export type PreviewBodyProps = {
    body: string
}

export default function PreviewBody({
    body
}: PreviewBodyProps) {

    return (
        <div className="preview-container">



            <div className="preview-body">
                <ReactMarkdown>
                    {body}
                </ReactMarkdown>
            </div>

        </div>
    )
}
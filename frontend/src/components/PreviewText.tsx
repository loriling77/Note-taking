import PreviewBody from './PreviewBody'
import PreviewTitle from './PreviewTitle'
import type { PreviewBodyProps } from './PreviewBody'
export default function ({ body }: PreviewBodyProps) {

    return (
        <>
            <PreviewTitle></PreviewTitle>
            <PreviewBody body={body}></PreviewBody>
        </>
    )
}
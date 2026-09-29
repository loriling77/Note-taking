import BodyTitle from './BodyTitle'
import Body from './Body'
import type { BodyProps } from './Body'
export default function ({ body, setBody }: BodyProps) {
    return (
        <>
            <BodyTitle></BodyTitle>
            <Body body={body} setBody={setBody}></Body>
        </>
    )
}
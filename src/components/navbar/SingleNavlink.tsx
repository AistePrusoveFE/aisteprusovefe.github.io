
interface NavlinkProps {
    text: string
    linkId: string
    onClick: () => void
}

const SingleNavlink = ({ text, linkId, onClick }: NavlinkProps) => {

    return (
        <a href={`#${linkId}`} onClick={onClick} className=" ">{text}</a>
    )
}

export default SingleNavlink
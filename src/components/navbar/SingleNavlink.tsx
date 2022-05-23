import useMediaQuery from "../../hooks/useMediaQuery"

interface NavlinkProps {
    text: string
    linkId: string
    onClick: () => void
}

const SingleNavlink = ({ text, linkId, onClick }: NavlinkProps) => {
    const isMedium = useMediaQuery('(min-width: 769px')
    return (
        <a href={`#${linkId}`} onClick={onClick} className={`${isMedium ? 'text-lg' : 'text-3xl title'} `}>{text}</a>
    )
}

export default SingleNavlink
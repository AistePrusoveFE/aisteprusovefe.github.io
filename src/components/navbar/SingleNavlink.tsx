import useMediaQuery from "../../hooks/useMediaQuery"

interface NavlinkProps {
    text: string
    linkId: string
    onClick: () => void
}

const SingleNavlink = ({ text, linkId, onClick }: NavlinkProps) => {
    const isMedium = useMediaQuery('(min-width: 769px')
    return (
        <a href={`#${linkId}`} onClick={onClick} className={`${!isMedium ? 'title text-3xl' : 'text-lg'}`}>{text}</a>
    )
}

export default SingleNavlink
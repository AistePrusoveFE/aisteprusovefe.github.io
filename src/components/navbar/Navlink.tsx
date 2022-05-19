interface NavlinkProps {
    text: string
    linkId: string
    onClick: () => void
}

const Navlink = ({ text, linkId, onClick }: NavlinkProps) => {


    return (
        <a href={`#${linkId}`} onClick={onClick} className="title text-3xl">{text}</a>
    )
}

export default Navlink
interface NavlinkProps {
    text: string
    linkId: string
    onClick?: () => {}
}

const Navlink = ({ text, linkId, onClick }: NavlinkProps) => {
    return (
        <a href={`#${linkId}`} onClick={onClick}>{text}</a>
    )
}

export default Navlink
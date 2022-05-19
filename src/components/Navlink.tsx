interface NavlinkProps {
    text: string
    linkId: string
}

const Navlink = ({ text, linkId }: NavlinkProps) => {
    return (
        <a href={`#${linkId}`}>{text}</a>
    )
}

export default Navlink
interface SectionDescriptionProps {
    text: string
}

const SectionDescription = ({ text }: SectionDescriptionProps) => {
    return (
        <div className="">{text}</div>
    )
}

export default SectionDescription
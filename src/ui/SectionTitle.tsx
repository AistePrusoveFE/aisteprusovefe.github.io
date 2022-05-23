interface SectionTitleProps {
    text: string
}

const SectionTitle = ({ text }: SectionTitleProps) => {
    return (
        <div className="text-center my-12 font-bold text-2xl">{text}</div>
    )
}

export default SectionTitle
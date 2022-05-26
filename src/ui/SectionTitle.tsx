interface SectionTitleProps {
    text: string
}

const SectionTitle = ({ text }: SectionTitleProps) => {
    return (
        <div className="text-center mt-4 mb-6 font-bold text-4xl apolline">{text}</div>
    )
}

export default SectionTitle
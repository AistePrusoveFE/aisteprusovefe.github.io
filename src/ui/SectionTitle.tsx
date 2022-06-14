interface SectionTitleProps {
    text: string
}

const SectionTitle = ({ text }: SectionTitleProps) => {
    return (
        <div className="text-center mt-4 font-bold text-3xl   dark:text-zinc-200 mb-8">{text}</div>
    )
}

export default SectionTitle
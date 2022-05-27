interface SubTitleProps {
    text: string
}

const SectionSubtitle = ({ text }: SubTitleProps) => {
    return <h2 className="font-bold text-lg text-center apolline mt-20">{text}</h2>
}

export default SectionSubtitle
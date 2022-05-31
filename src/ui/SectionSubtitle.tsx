interface SubTitleProps {
    text: string
}

const SectionSubtitle = ({ text }: SubTitleProps) => {
    return <h2 className="text-xl text-center apolline mt-20 dark:text-zinc-200">{text}</h2>
}

export default SectionSubtitle
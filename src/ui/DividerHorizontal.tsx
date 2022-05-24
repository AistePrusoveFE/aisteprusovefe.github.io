interface DividerProps {
    className?: string
}

const DividerHorizontal = ({ className }: DividerProps) => {

    return <div className={`${className ?? ''} bg-zinc-700 h-px`} />
}

export default DividerHorizontal
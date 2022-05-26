interface DividerProps {
    className?: string
}

const DividerHorizontal = ({ className }: DividerProps) => {

    return <div className={`${className ?? ''} h-px`} />
}

export default DividerHorizontal
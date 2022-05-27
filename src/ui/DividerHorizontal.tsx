interface DividerProps {
    className?: string
}

const DividerHorizontal = ({ className }: DividerProps) => {

    return <div className={`${className ?? ''} h-px bg-gradient-to-r from-pink-50 to-pink-200`} />
}

export default DividerHorizontal
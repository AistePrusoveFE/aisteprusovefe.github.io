interface GridColumn {
    content: string
    size?: string
}

const GridCol = ({ content, size }: GridColumn) => {
    return (
        <div className={`${size} border border-black p-2 text-center cursor-pointer`}>
            <p>{content}</p>
        </div>
    )
}

export default GridCol
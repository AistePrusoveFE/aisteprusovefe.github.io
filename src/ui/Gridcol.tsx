interface GridColumn {
    content: string
    size?: string
}

const GridCol = ({ content, size }: GridColumn) => {
    return (
        <div className={`${size} shadow-md p-2 text-center cursor-pointer rounded-xl hover:shadow-xl`}>
            <p>{content}</p>
        </div>
    )
}

export default GridCol
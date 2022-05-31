interface GridColumn {
    children: JSX.Element | JSX.Element[]
    size?: string
}

const GridCol = ({ children, size }: GridColumn) => {
    return (
        <div className={`${size} shadow-md p-2 text-center cursor-pointer rounded-xl hover:shadow-xl dark:text-zinc-200`}>
            {children}
        </div>
    )
}

export default GridCol
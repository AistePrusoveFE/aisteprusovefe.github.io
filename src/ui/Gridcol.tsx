interface GridColumn {
    content: string
  }
  
const GridCol = ({content}: GridColumn) => {
    return (
        <div className="border border-black p-2 text-center cursor-pointer">
            <p>{content}</p>
        </div>
    )
}

export default GridCol
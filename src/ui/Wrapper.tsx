
interface WrapperInterface {
    children: JSX.Element | JSX.Element[]
    className?: string
}

const Wrapper = ({ children, className }: WrapperInterface) => {
    return (
        <div className={`${className} p-2 m-2`}>
            {children}
        </div>
    )
}

export default Wrapper 

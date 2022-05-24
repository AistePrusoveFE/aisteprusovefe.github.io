
interface WrapperInterface {
    children: JSX.Element | JSX.Element[]
    className?: string
}

const Wrapper = ({ children, className }: WrapperInterface) => {
    return (
        <div className={`${className ?? ''} p-1 m-1 md:px-0 md:mx-0 py-10`}>
            {children}
        </div>
    )
}

export default Wrapper 

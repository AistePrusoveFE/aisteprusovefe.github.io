
interface WrapperInterface {
    children: JSX.Element | JSX.Element[]
    className?: string
}

const Wrapper = ({ children, className }: WrapperInterface) => {
    return (
        <div className={`${className} p-2 m-2 md:px-0 md:mx-0`}>
            {children}
        </div>
    )
}

export default Wrapper 

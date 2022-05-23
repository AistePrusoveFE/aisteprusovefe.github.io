import useMediaQuery from "../hooks/useMediaQuery"

interface WrapperInterface {
    children: JSX.Element | JSX.Element[]
    className?: string
}

const Wrapper = ({ children, className }: WrapperInterface) => {
    const isMedium = useMediaQuery('(min-width: 768px)');
    return (
        <div className={`${className} ${isMedium ? 'min-h-screen' : ''} p-2 m-2 text-center`}>
            {children}
        </div>
    )
}

export default Wrapper 

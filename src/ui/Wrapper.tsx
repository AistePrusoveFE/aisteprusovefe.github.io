import useMediaQuery from "../hooks/useMediaQuery"

interface WrapperInterface {
  children: JSX.Element | JSX.Element[]
  className?: string
}

export default function Wrapper({ children, className }: WrapperInterface) {
  const isMedium = useMediaQuery('(min-width: 768px)');
  return (
    <div className={`${className} ${isMedium ? 'h-screen' : ''} p-4 m-2 text-center`}>
      {children}
    </div>
  )
}

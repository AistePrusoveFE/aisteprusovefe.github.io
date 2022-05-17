interface WrapperInterface {
  children: JSX.Element | JSX.Element[]
  className?: string
}

export default function Wrapper({ children, className }: WrapperInterface) {
  return (
    <div className={`${className} p-4 border m-2 text-center`}>
      {children}
    </div>
  )
}

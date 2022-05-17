interface WrapperInterface {
  children: JSX.Element | JSX.Element[]
}

export default function Wrapper({ children }: WrapperInterface) {
  return (
    <div className="p-4 border m-2 text-center">
      {children}
    </div>
  )
}

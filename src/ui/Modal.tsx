import ReactDOM from "react-dom"

interface ModalProps {
    children: JSX.Element | JSX.Element[]
    open: boolean
    onClose: () => void
}

const Modal = ({ children, open, onClose }: ModalProps) => {
    if (!open) return null

    return ReactDOM.createPortal(
        <div>
            {/* {backdrop} */}
            <div className="fixed inset-0 bg-black/75 z-10" />
            {/* {modal} */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 z-20 flex flex-col gap-y-12 rounded-xl min-w-[90%] lg:min-w-[1024px]">
                <button onClick={onClose} className="bg-red-600 text-white border-2 border-red-900 p-2 rounded-md place-self-end">Close Modal</button>
                {children}
            </div>

        </div>,
        document.getElementById('portal')!
    )
}

export default Modal
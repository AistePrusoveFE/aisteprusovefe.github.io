import ReactDOM from "react-dom"
import BtnIcon from "./BtnIcon"
import {AiOutlineClose} from 'react-icons/ai'

interface ModalProps {
    children: JSX.Element | JSX.Element[]
    open: boolean
    onClose: () => void
}

const Modal = ({ children, open, onClose }: ModalProps) => {
    if (!open) return null

    return ReactDOM.createPortal(
        <div className="p-4">
            {/* {backdrop} */}
            <div className="fixed inset-0 bg-black/75 z-10" />
            {/* {modal} */}
            <div className="fixed inset-4 md:max-w-screen-lg mx-auto bg-white p-4 z-20 flex flex-col gap-y-12 rounded-xl">
                <BtnIcon onClick={onClose} icon={<AiOutlineClose />} className="bg-red-600 text-white border-2 border-red-900 p-2 rounded-full place-self-end" />
                {children}
            </div>
        </div>,
        document.getElementById('portal')!
    )
}

export default Modal
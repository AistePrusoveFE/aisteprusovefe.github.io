import { useState } from "react"
import { SingleArticleProps } from "../content"
import Modal from "../ui/Modal"

const SingleArticle = ({ content }: SingleArticleProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const { heading, subheading, photo, description, alt } = content

    return (
        <div className="p-2 border-2 border-l-8 border-black cursor-pointer mb-8 bg-red-100">
            <div onClick={() => setIsOpen(true)}>
                <h4 className="font-bold">{heading}</h4>
                <p>{subheading}</p>
            </div>
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <div>
                    <h4>{heading}</h4>
                    <img src={photo} alt={alt} />
                    <p>{description}</p>
                </div>

            </Modal>
        </div>
    )
}

export default SingleArticle
import { useState } from "react"
import { SingleArticleProps } from "../content"
import Modal from "../ui/Modal"

const SingleArticle = ({ content }: SingleArticleProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const { heading, photo, description, alt, url } = content

    return (
        <div className="px-2 py-8 border-2 border-l-8 border-black cursor-pointer mb-8 bg-red-100 dark:bg-zinc-800 dark:text-white">
            <div onClick={() => setIsOpen(true)}>
                <h4 className="font-bold">{heading}</h4>
                <p>preview</p>
            </div>
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <div>
                    <h4>{heading}</h4>
                    <img src={photo} alt={alt} />
                    {url && <button onClick={() => window.open(url, '_blank')}>visit link</button>}
                    <p>{description}</p>
                </div>

            </Modal>
        </div>
    )
}

export default SingleArticle
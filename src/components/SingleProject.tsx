import { useState } from "react"
import { SingleProjectProps } from "../content"
import GridCol from "../ui/Gridcol"
import Modal from "../ui/Modal"


const SingleProject = ({ title, content, category }: SingleProjectProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const { url, img, shape } = content

    const categoryTitle = (category: string) => {
        if (category === 'art') {
            return 'digital art'
        } else {
            return 'web & design'
        }
    }

    const openUrl = (url: string) => {
        window.open(url, '_blank')
    }

    return (
        <GridCol className="bg-white">
            <div className="h-64 relative" onClick={() => setIsOpen(true)}>
                <img src={img} alt="webpage preview" className="h-full w-full object-cover rounded-md" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-40 h-40">
                    <img src={shape} alt="" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center text-xs uppercase gap-y-2">
                        <h4 className="font-extrabold text-black">{title}</h4>
                        <h4 className="text-zinc-400 font-bold apolline">{categoryTitle(category)}</h4>
                    </div>
                </div>
            </div>
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <div className="overflow-y-scroll">
                    {url && <button onClick={() => openUrl(url)} className="py-2 px-4 border border-pink-300 rounded-md mb-4">visit link</button>}
                    {!url ? (
                        <img src={img} alt={title} className="w-full " />
                    ) : (
                        <iframe title={title} src={url} className="w-full" />
                    )}

                </div>
            </Modal>
        </GridCol>
    )
}

export default SingleProject
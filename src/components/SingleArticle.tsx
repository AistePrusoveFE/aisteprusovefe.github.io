import { SingleArticleProps } from "../content"

const SingleArticle = ({ content }: SingleArticleProps) => {
    const { heading, url } = content

    const openUrl = (url: string) => {
        window.open(url, '_blank')
    }

    return (
        <div className="px-2 py-8 border-2 border-l-8 border-black cursor-pointer mb-8 bg-red-100 dark:bg-zinc-800 dark:text-white">
            <h4 className="font-bold">{heading}</h4>
            <div className="text-right">
                <button className="cursor-pointer font-bold" onClick={() => openUrl(url)}>read more..</button>
            </div>

        </div>
    )
}

export default SingleArticle
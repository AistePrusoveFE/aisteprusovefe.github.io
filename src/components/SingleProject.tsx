import { CategoryType, SingleProjectProps } from "../content"
import GridCol from "../ui/Gridcol"

const SingleProject = ({ title, content, category }: SingleProjectProps) => {
    const { url, subtitle, img } = content

    const categoryFiller = (category: CategoryType) => {
        const beautify = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()

        if (category === 'art' || category === 'branding'){
            return beautify
        } else {
            return beautify + ' & Design'
        }
    }

    // border-[#FF0088]
    return (
        <GridCol className={`border-2 border-zinc-800`}>
            <h4>{title}</h4>
            <div>
                <h5 className="p-2 font-bold text-2xl">{categoryFiller(category)}</h5>
                <h5>{subtitle}</h5>
                <div className="h-full">
                    <img src={img} alt="webpage preview" className="h-60 object-cover w-full" />
                    <a href={url} className="inline-block mt-4 p-2">Visit Page</a>
                </div>
            </div>
        </GridCol>

    )
}

export default SingleProject
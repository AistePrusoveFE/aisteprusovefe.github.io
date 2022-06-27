import { motion } from "framer-motion"

interface GridColumn {
    children: JSX.Element | JSX.Element[]
    className?: string
    onClick?: () => void
}

const GridCol = ({ children, className, onClick }: GridColumn) => {
    return (
        <motion.div 
            onClick={onClick}
            whileTap={{
                scale: 0.95,
            }}
            className={`${className ?? ''} text-center cursor-pointer rounded-md hover:shadow-lg dark:text-zinc-200`}>
            {children}
        </motion.div>
    )
}

export default GridCol
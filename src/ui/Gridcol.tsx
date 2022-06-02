import { motion } from "framer-motion"

interface GridColumn {
    children: JSX.Element | JSX.Element[]
    size?: string
    className?: string
}

const GridCol = ({ children, size, className }: GridColumn) => {
    return (
        <motion.div 
            whileHover={{
                // scale: 1.1,
                borderColor: '#FF0088', 
                transition: {
                    duration: 0.5
                }
            }}
            whileTap={{
                scale: 0.95,
                borderColor: '#FF0088', 
            }}
            className={`${size ?? ''} ${className ?? ''} shadow-md p-2 text-center cursor-pointer rounded-xl hover:shadow-xl dark:text-zinc-200`}>
            {children}
        </motion.div>
    )
}

export default GridCol
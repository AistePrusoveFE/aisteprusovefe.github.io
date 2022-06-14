import { motion } from "framer-motion"

interface GridColumn {
    children: JSX.Element | JSX.Element[]
    size?: string
    className?: string
    onClick?: () => void
}

const GridCol = ({ children, size, className, onClick }: GridColumn) => {
    return (
        <motion.div 
            onClick={onClick}
            whileHover={{
                // scale: 1.1,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                borderColor: '#FF0088', 
                transition: {
                    duration: 0.5
                }
            }}
            whileTap={{
                scale: 0.95,
                borderColor: '#FF0088', 
            }}
            className={`${size ?? ''} ${className ?? ''} shadow-md text-center cursor-pointer rounded-md hover:shadow-xl dark:text-zinc-200`}>
            {children}
        </motion.div>
    )
}

export default GridCol
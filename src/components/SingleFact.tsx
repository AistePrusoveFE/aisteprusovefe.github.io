import { AnimatePresence, motion } from 'framer-motion';
import { useContext, useState } from 'react';
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';
import { SingleFactProps } from '../content';
import { ThemeContext } from '../context/theme-context';
import BtnIcon from '../ui/BtnIcon';

interface AccordionProps extends SingleFactProps {
    index: number
}

const SingleFact = ({ title, info, index }: AccordionProps) => {
    const [expanded, setExpanded] = useState<false | number>(false)
    const { theme } = useContext(ThemeContext)
    const isOpen = index === expanded

    const printInfo = (info: string[]) => {
        return (
            <ul className="py-2">{info.map((item, index) => {
                return <li className="p-2 pl-0" key={index}>{item}</li>
            })}</ul>
        )
    }

    return (
        <div className="mb-2">
            <motion.div
                initial={false}
                animate={{
                    backgroundColor: isOpen && theme === 'light' ? "#FF0088" // tamsu & atidaryta - pink
                        : !isOpen && theme === "dark" ? "#27272a" // tamsu & uždaryta - bg-
                            : "#27272a" // šviesu & uždaryta - bg-zinc-800
                }}
                onClick={() => setExpanded(isOpen ? false : index)}
                className={`text-zinc-50 border-l-4 border-l-[#FF0088] dark:border-l-[#FF0088] flex items-center cursor-pointer py-2 lg:py-6`}
            >
                <BtnIcon icon={expanded ? <RiArrowUpSFill /> : <RiArrowDownSFill />} />
                <h4 className="font-bold   lg:text-lg">{title}</h4>
            </motion.div>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{
                            duration: 0.8,
                            ease: [0.04, 0.62, 0.23, 0.98]
                        }}
                        className={`dark:bg-zinc-900 pl-8 text-justify border-l-4 border-l-[#FF0088] dark:border-l-[#FF0088] dark:text-zinc-200`}>
                        <motion.div
                            variants={{
                                collapsed: { scale: 0.9 },
                                open: { scale: 1 }
                            }}
                            transition={{
                                duration: 0.8
                            }}
                        >
                            {printInfo(info)}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
};

export default SingleFact;
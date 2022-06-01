import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';
import { SingleFactProps } from '../content';
import BtnIcon from '../ui/BtnIcon';

interface AccordionProps extends SingleFactProps {
    index: number
}

const SingleFact = ({ title, info, badges, index }: AccordionProps) => {
    const [expanded, setExpanded] = useState<false | number>(false)
    const isOpen = index === expanded

    const printInfo = (info: string[], badges?: boolean) => {
        if (badges) {
            return <ul className="py-2 flex flex-wrap dark:bg-zinc-700">{info.map((item, index) => {
                return <li className="p-2 pl-0" key={index}>
                    <img src={item} alt="skill badge" className="rounded-md" />
                </li>
            })}
            </ul>
        }

        return <ul className="py-2">{info.map((item, index) => {
            return <li className="p-2 pl-0" key={index}>{item}</li>
        })}</ul>
    }

    return (
        <div className="mb-2">
            <motion.div
                initial={false}
                animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
                onClick={() => setExpanded(isOpen ? false : index)}
                className={`dark:text-zinc-200 border-l-4 border-l-[#FF0088] dark:border-l-[#FF0088] flex items-center bg-red-100 dark:bg-zinc-800 cursor-pointer py-2 lg:py-6`}
            >
                <BtnIcon icon={expanded ? <RiArrowUpSFill /> : <RiArrowDownSFill />} />
                <h4 className="font-bold apolline lg:text-lg">{title}</h4>
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
                            collapsed: {opacity: 0, height: 0}
                        }}
                        transition={{
                            duration: 0.8, 
                            ease: [0.04, 0.62, 0.23, 0.98]
                        }}
                        className={`${badges ? 'dark:bg-zinc-700' : 'dark:bg-zinc-800'} pl-8 bg-red-100  text-justify border-l-4 border-l-red-400 dark:border-l-[#FF0088] dark:text-zinc-200`}>
                            <motion.div
                                variants={{
                                    collapsed: { scale: 0.9 }, 
                                    open: { scale: 1 }
                                }}
                                transition={{
                                    duration: 0.8
                                }}
                                >
                                { printInfo(info, badges) }
                            </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
};

export default SingleFact;
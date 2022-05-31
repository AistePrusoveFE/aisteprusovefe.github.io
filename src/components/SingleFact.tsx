import { useState } from 'react';
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';
import { SingleFactProps } from '../content';
import BtnIcon from '../ui/BtnIcon';

const SingleFact = ({ title, info }: SingleFactProps) => {
    const [showInfo, setShowInfo] = useState(false)

    const onShowInfoHandler = () => {
        setShowInfo(!showInfo)
    }

    const printInfo = (info: string | string[]) => {
        if (Array.isArray(info)) {
            return <ul className="py-2">{info.map((item, index) => {
                return <li className="p-2 pl-0" key={index}>{item}</li>
            })}</ul>
        }

        return <p className="p-4 pl-0">{info}</p>
    }

    return (
        <div className="rounded-r-lg mb-2">
            <div className={`${showInfo ? 'rounded-t-lg' : 'rounded-lg'} dark:text-zinc-200 border-l-4 border-l-red-400 dark:border-l-zinc-500 flex items-center bg-red-100 dark:bg-zinc-800 cursor-pointer py-2 lg:py-6`} onClick={onShowInfoHandler}>
                <BtnIcon icon={showInfo ? <RiArrowUpSFill /> : <RiArrowDownSFill />} />
                <h4 className="font-bold apolline lg:text-lg">{title}</h4>
            </div>
            {showInfo && (
                <div className="pl-8 bg-red-100 dark:bg-zinc-800 text-justify border-l-4 border-l-red-400 dark:border-l-zinc-500 rounded-b-lg dark:text-zinc-200">
                    {printInfo(info)}
                </div>
            )}
        </div>
    )
};

export default SingleFact;
import { useState } from 'react';
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';
import { SingleFactProps } from '../content';
import BtnIcon from '../ui/BtnIcon';

const SingleFact = ({ title, info }: SingleFactProps) => {
    const [showInfo, setShowInfo] = useState(false)

    const onShowInfoHandler = () => {
        setShowInfo(!showInfo)
    }

    const infoCheck = (info: string | string[]) => {
        if (Array.isArray(info)) {
            return <ul className="py-2 bg-zinc-50 rounded-b-xl">{info.map((item, index) => {
                return <li className="p-2 pl-8 text-justify" key={index}>{item}</li>
            })}</ul>
        }

        return <p className="p-4 pl-8 text-justify bg-zinc-50 rounded-b-xl">{info}</p>
    }

    return (
        <div className="mb-4 shadow-md rounded-xl">
            <div className={`${showInfo ? 'rounded-t-xl' : 'rounded-xl'} flex items-center bg-red-100 hover:bg-red-200 focus:bg-red-200 cursor-pointer py-2 lg:py-6`} onClick={onShowInfoHandler}>
                <BtnIcon icon={showInfo ? <RiArrowUpSFill /> : <RiArrowDownSFill />} />
                <h4 className="font-bold apolline lg:text-lg">{title}</h4>
            </div>
            {showInfo && infoCheck(info)}
        </div>
    )
};

export default SingleFact;
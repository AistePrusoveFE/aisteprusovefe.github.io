import { useState } from 'react';
// import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';
import { SingleQuestion } from '../content';
import BtnIcon from '../ui/BtnIcon';

const Question = ({ title, info}: SingleQuestion) => {
    const [showInfo, setShowInfo] = useState(false)

    const onShowInfoHandler = () => {
        setShowInfo(!showInfo)
    }

    return (
        <div className="mb-4 shadow-md rounded-xl">
            <div className={`${showInfo ? 'rounded-t-xl' : 'rounded-xl'} flex items-center bg-red-100 hover:bg-red-200 focus:bg-red-200 cursor-pointer py-2` } onClick={onShowInfoHandler}>
                <BtnIcon icon={showInfo ? <RiArrowUpSFill /> : <RiArrowDownSFill />} />
                <h4 className="font-bold apolline ">{title}</h4>
            </div>
            { showInfo && <p className="p-4 pl-8 text-justify bg-zinc-50 rounded-b-xl">{info}</p> }
        </div>
    )
};

export default Question;
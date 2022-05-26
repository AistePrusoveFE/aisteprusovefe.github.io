import { useState } from 'react';
// import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';
import { SingleQuestionProps } from '../content';
import BtnIcon from '../ui/BtnIcon';

const SingleQuestion = ({ title, info}: SingleQuestionProps) => {
    const [showInfo, setShowInfo] = useState(false)

    const onShowInfoHandler = () => {
        setShowInfo(!showInfo)
    }

    return (
        <div className="mb-4 shadow-md rounded-xl">
            <div className={`${showInfo ? 'rounded-t-xl' : 'rounded-xl'} flex items-center bg-red-100 hover:bg-red-200 focus:bg-red-200 cursor-pointer py-2 lg:py-6` } onClick={onShowInfoHandler}>
                <BtnIcon icon={showInfo ? <RiArrowUpSFill /> : <RiArrowDownSFill />} />
                <h4 className="font-bold apolline lg:text-lg">{title}</h4>
            </div>
            { showInfo && <p className="p-4 pl-8 text-justify bg-zinc-50 rounded-b-xl">{info}</p> }
        </div>
    )
};

export default SingleQuestion;
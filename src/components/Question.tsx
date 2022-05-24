import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { SingleQuestion } from '../content';
import BtnIcon from '../ui/BtnIcon';

const Question = ({ title, info}: SingleQuestion) => {
    const [showInfo, setShowInfo] = useState(false)

    const onShowInfoHandler = () => {
        setShowInfo(!showInfo)
    }

    return (
        <div className="p-2 mb-4 rounded-xl shadow-md">
            <div className="flex items-center gap-x-2 py-2">
                <BtnIcon onClick={onShowInfoHandler} icon={showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />} />
                <h4 className="font-bold apolline">{title}</h4>
            </div>
            { showInfo && <p className="pl-10 text-justify pr-4 pb-4">{info}</p> }
        </div>
    )
};

export default Question;
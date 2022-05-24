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
        <div className="py-4">
            <div className="flex items-center gap-x-2 py-2">
                <BtnIcon onClick={onShowInfoHandler} icon={showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />} />
                <h4>{title}</h4>
            </div>
            { showInfo && <p>{info}</p> }
        </div>
    )
};

export default Question;
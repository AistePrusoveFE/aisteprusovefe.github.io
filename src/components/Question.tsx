import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { SingleQuestion } from '../content';

const Question = ({ title, info}: SingleQuestion) => {
    const [showInfo, setShowInfo] = useState(false)

    const onShowInfoHandler = () => {
        setShowInfo(!showInfo)
    }

    return (
        <div>
            <h4>{title}</h4>
            <button onClick={onShowInfoHandler}>
                { showInfo ? <AiOutlineMinus /> : <AiOutlinePlus /> }
            </button>
            { showInfo && <p>{info}</p> }
        </div>
    )
};

export default Question;
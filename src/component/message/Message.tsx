import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/store/store";


const translateKey = {
    arr: '스택/큐',
    path: '경로',
    curNode: '현재 정점',
    visit: '탐색 정보',
    curEdge: '현재 간선',
}

const Message = ({ message, setMessage }) => {

    const handleButtonClick = () => {
        setMessage([]);
    }

    const divRef = useRef(null);


    useEffect(() => {
        if (divRef.current) {
            divRef.current.scrollTop = divRef.current.scrollHeight;
        }
    }, [message]);

    const stateObj = {}

   

    return (
        <div>
            <button onClick={handleButtonClick}>메시지 초기화하기</button>
            <div ref={divRef} style={{ overflow: 'auto' }}>
                {message.map((m: React.JSX.Element) => m)}
            </div>
        </div>
    )
}

export default Message;
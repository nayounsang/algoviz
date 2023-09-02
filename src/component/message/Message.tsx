import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/store/store";

const Message = ({ message, setMessage }) => {

    const info = useSelector((state: RootState) => state.info.info);

    const handleButtonClick = () => {
        setMessage([]);
    }

    const divRef = useRef(null);


    useEffect(() => {
        if (divRef.current) {
            divRef.current.scrollTop = divRef.current.scrollHeight;
        }
    }, [message]);





    return (
        <div>
            <button onClick={handleButtonClick}>메시지 초기화하기</button>
            <h3>알고리즘 정보</h3>
            {info.map((child: React.JSX.Element) => child
            )}
            <h3>출력 메시지</h3>
            <div ref={divRef} style={{ overflow: 'auto' }}>
                {message.map((m: React.JSX.Element) => m)}
            </div>
        </div>
    )
}

export default Message;
import React, { useEffect, useRef } from "react";

const Message = ({ message, setMessage,className }) => {


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
        <div className={className}>
            <h3>출력 메시지</h3>
            <button onClick={handleButtonClick}>메시지 초기화하기</button>
            <div ref={divRef} style={{ overflow: 'auto' }}>
                {message.map((m: React.JSX.Element) => m)}
            </div>
        </div>
    )
}

export default Message;
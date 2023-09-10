import React, { useEffect, useRef } from "react";
import { BlackButton } from "../styled/StyledButton";

const Message = ({ message, setMessage,style }) => {


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
        <div style = {style}>
            <h3>출력 메시지</h3>
            <BlackButton  onClick={handleButtonClick}>메시지 초기화하기</BlackButton>
            <div ref={divRef} style={{ overflow: 'auto',maxHeight:200 }}>
                {message.map((m: React.JSX.Element) => m)}
            </div>
        </div>
    )
}

export default Message;
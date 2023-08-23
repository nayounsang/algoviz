import React from "react";


const Message = ({ message, setMessage }) => {
    const handleButtonClick = () => {
        setMessage([]);
    }



    return (
        <div>
            <button onClick={handleButtonClick}>메시지 초기화하기</button>
            <div>
                {message.map((m: React.JSX.Element) => m)}
            </div>
        </div>
    )
}

export default Message;
import React, { useState } from 'react';
import { GraphPropType } from 'src/types/proptype';
import { addGraph } from 'src/function/State/GraphStateFunc';




const InputNodeEdge = ({graph,setGraph,direct}:GraphPropType) => {


    const [text, setText] = useState('');
    const handleTextChange = (event) => {
        setText(event.target.value);
    };


    const handleButtonClick = async () => {
        setGraph(await addGraph(text,graph,direct));
        setText('');
    }





    return (
        <div>
            <textarea value={text}
                onChange={handleTextChange}
                placeholder={'간선,정점 정보 입력'}
                autoCorrect='false' />
            <button onClick={handleButtonClick}>추가하기</button>
        </div>
    );
};

export default InputNodeEdge;
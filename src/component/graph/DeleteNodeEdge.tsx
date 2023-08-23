import React, { useState } from 'react';
import { GraphPropType } from 'src/types/proptype';
import { removeGraph } from 'src/function/State/GraphStateFunc';


const DeleteNodeEdge = ({ graph, setGraph, direct, message, setMessage }: GraphPropType) => {


    const [text, setText] = useState('');
    const handleTextChange = (event) => {
        setText(event.target.value);
    };




    const handleRemoveButtonClick = () => {
        const [g, m] = removeGraph(text, graph, direct, message);
        setGraph(g);
        setMessage(m);
        setText('');
    }

    const handleInitButtonClick = () => {
        setGraph({ nodes: [], edges: [] })
        setText('');
    }






    return (
        <div>
            <textarea value={text}
                onChange={handleTextChange}
                placeholder={'간선,정점 정보 입력'}
                autoCorrect='false' />
            <button onClick={handleRemoveButtonClick}>삭제하기</button>
            <button onClick={handleInitButtonClick}>초기화하기</button>
        </div>
    );
};

export default DeleteNodeEdge;
import React, { useState } from 'react';
import { GraphPropType } from 'src/types/proptype';
import { addGraph } from 'src/function/State/GraphStateFunc';
import { Button, TextareaAutosize } from '@mui/material';




const InputNodeEdge = ({ graph, setGraph, direct, message, setMessage }: GraphPropType) => {

    const [text, setText] = useState('');
    const handleTextChange = (event) => {
        setText(event.target.value);
    };


    const handleButtonClick = () => {
        const [g, m] = addGraph(text, graph, direct, message);
        setGraph(g);
        setMessage(m);
        setText('');
    }




    return (
        <div>
            <TextareaAutosize
                value={text}
                onChange={handleTextChange}
                placeholder={'간선,정점 정보 입력'}
                autoCorrect='false'
                minRows={15}
            />
            <Button onClick={handleButtonClick}>추가하기</Button>
        </div>
    );
};

export default InputNodeEdge;




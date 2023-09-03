import React, { useState } from 'react';
import { GraphPropType } from 'src/types/proptype';
import { removeGraph } from 'src/function/State/GraphStateFunc';
import { Button, TextareaAutosize } from '@mui/material';


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
            <TextareaAutosize
                value={text}
                onChange={handleTextChange}
                placeholder={'간선,정점 정보 입력'}
                autoCorrect='false'
                minRows={15}
            />
            <Button onClick={handleRemoveButtonClick}>삭제하기</Button>
            <Button onClick={handleInitButtonClick}>초기화하기</Button>
        </div>
    );
};

export default DeleteNodeEdge;
import React, { useState } from 'react';
import { GraphPropType } from 'src/types/proptype';
import { removeGraph } from 'src/function/State/GraphStateFunc';
import StyledTextarea from '../styled/StyledTextarea';
import { BlackButton, RedButton } from '../styled/StyledButton';
import { buttongroupStyle, textareaStyle } from 'src/style/layout/selectdivStyle';


const DeleteNodeEdge = ({ graph, setGraph, direct, message, setMessage, style }: GraphPropType) => {


    const [text, setText] = useState('');
    const handleTextChange = (event) => {
        setText(event.target.value);
    };




    const handleRemoveButtonClick = () => {
        if (text === '') {
            return
        }
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
        <div style={style}>
            <div style={textareaStyle}>
                <StyledTextarea
                    value={text}
                    onChange={handleTextChange}
                    placeholder={'간선,정점 정보 입력'}
                    autoCorrect='false'
                    minRows={15}
                    maxRows={15}
                    sx={{
                        width: '80%'
                    }}
                />
            </div>
            <div style={buttongroupStyle}>
                <RedButton onClick={handleRemoveButtonClick}>삭제</RedButton>
                <BlackButton onClick={handleInitButtonClick}>초기화</BlackButton>
            </div>

        </div>
    );
};

export default DeleteNodeEdge;
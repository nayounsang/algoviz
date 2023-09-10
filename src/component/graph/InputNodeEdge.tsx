import React, { useState } from 'react';
import { GraphPropType } from 'src/types/proptype';
import { addGraph } from 'src/function/State/GraphStateFunc';
import StyledTextarea from '../styled/StyledTextarea';
import { BlueButton } from '../styled/StyledButton';
import { buttonStyle, textareaStyle } from 'src/style/layout/selectdivStyle';


const InputNodeEdge = ({ graph, setGraph, direct, message, setMessage, style }: GraphPropType) => {

    const [text, setText] = useState('');
    const handleTextChange = (event) => {
        setText(event.target.value);
    };


    const handleButtonClick = () => {
        if (text === '') {
            return
        }
        const [g, m] = addGraph(text, graph, direct, message);
        setGraph(g);
        setMessage(m);
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
            <div style={buttonStyle}>
                <BlueButton onClick={handleButtonClick}>추가</BlueButton>
            </div>
        </div>
    );
};

export default InputNodeEdge;




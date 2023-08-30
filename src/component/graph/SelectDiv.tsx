import React, { useState } from 'react';
import InputNodeEdge from './InputNodeEdge';
import DeleteNodeEdge from './DeleteNodeEdge';
import { GraphType } from 'src/types/graphtype';
import { GraphPropType } from 'src/types/proptype';
import ShowAdjList from './ShowAdjList';



const SelectDiv = ({ graph, setGraph, direct, message, setMessage }: GraphPropType) => {
    const [selectedOption, setSelectedOption] = useState('create');

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedOption(event.target.value);
    };

    const showComponent = (value: string): React.JSX.Element => {
        let content: React.JSX.Element = <div></div>;
        if (value === 'create') {
            content = <InputNodeEdge
                graph={graph}
                setGraph={setGraph}
                direct={direct}
                message={message}
                setMessage={setMessage} />
        } else if (value === 'delete') {
            content = <DeleteNodeEdge
                graph={graph}
                setGraph={setGraph}
                direct={direct}
                message={message}
                setMessage={setMessage} />
        } else if (value === 'read') {
            content = <ShowAdjList graph={graph} />
        } else {
            content = <h1>예상치 못한 오류</h1>
        }
        return content
    }

    let content = showComponent(selectedOption);




    return (
        <div>
            <select value={selectedOption} onChange={handleChange}>
                <option value="create">간선,정점 추가</option>
                <option value="delete">간선,정점 삭제</option>
                <option value="read">그래프 정보 확인</option>
            </select>
            {content}
        </div>
    );
};

export default SelectDiv;
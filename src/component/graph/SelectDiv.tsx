import React, { useState } from 'react';
import InputNodeEdge from './InputNodeEdge';
import DeleteNodeEdge from './DeleteNodeEdge';
import { GraphPropType } from 'src/types/proptype';
import ShowAdjList from './ShowAdjList';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';



const SelectDiv = ({ graph, setGraph, direct, message, setMessage }: GraphPropType) => {
    const [selectedMenuItem, setSelectedMenuItem] = useState('create');

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedMenuItem(event.target.value);
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

    let content = showComponent(selectedMenuItem);




    return (
        <div className='selectdiv'>
            <FormControl>
                <InputLabel >동작</InputLabel>
                <Select
                    label="동작"
                    value={selectedMenuItem}
                    onChange={handleChange}
                >
                    <MenuItem value="create">간선,정점 추가</MenuItem>
                    <MenuItem value="delete">간선,정점 삭제</MenuItem>
                    <MenuItem value="read">그래프 정보 확인</MenuItem>
                </Select>
            </FormControl>
            {content}
        </div>
    );
};

export default SelectDiv;


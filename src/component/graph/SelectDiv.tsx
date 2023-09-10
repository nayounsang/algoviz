import React, { useState } from 'react';
import InputNodeEdge from './InputNodeEdge';
import DeleteNodeEdge from './DeleteNodeEdge';
import { GraphPropType } from 'src/types/proptype';
import ShowAdjList from './ShowAdjList';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { MenuItem } from '@mui/material';
import { contentStyle, parentStyle, selectStyle } from 'src/style/layout/selectdivStyle';



const SelectDiv = ({ graph, setGraph, direct, message, setMessage, style }: GraphPropType) => {
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
                setMessage={setMessage} 
                style={parentStyle}/>
        } else if (value === 'delete') {
            content = <DeleteNodeEdge
                graph={graph}
                setGraph={setGraph}
                direct={direct}
                message={message}
                setMessage={setMessage} 
                style={parentStyle}/>
        } else if (value === 'read') {
            content = <ShowAdjList graph={graph} />
        } else {
            content = <h1>예상치 못한 오류</h1>
        }
        return content
    }

    let content = showComponent(selectedMenuItem);




    return (
        <div style={style}>
            <div style={selectStyle}>
                <FormControl size='small' sx ={{
                    width:'80%'
                }}>
                    <InputLabel >동작</InputLabel>
                    <Select
                        label="동작"
                        value={selectedMenuItem}
                        onChange={handleChange}>
                        <MenuItem value="create">간선,정점 추가</MenuItem>
                        <MenuItem value="delete">간선,정점 삭제</MenuItem>
                        <MenuItem value="read">그래프 정보 확인</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div style={contentStyle} >
                {content}
            </div>

        </div>
    );
};

export default SelectDiv;


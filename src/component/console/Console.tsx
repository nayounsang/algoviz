import React, { useState } from "react";
import { initGraphColor } from "src/function/Graph/GraphFunc";
import { GraphType } from "src/types/graphtype";
import { CommandType } from "src/types/proptype";

interface proptype{
    commands:CommandType,
    graph:GraphType,
    setGraph:React.Dispatch<React.SetStateAction<GraphType>>
}

const Console = ({ commands,graph,setGraph }:proptype) => {
    const [selectedOption, setSelectedOption] = useState('DFS');

    const handleSelectChange = (event) => {
        setGraph(initGraphColor(graph));
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <select value={selectedOption} onChange={handleSelectChange}>
                {Object.keys(commands).map((key,index) => (
                    <option key={index} value={key}>
                        {key}
                    </option>
                ))}
            </select>
            {commands[selectedOption]}
        </div>
    )
}

export default Console;

/*
props로 명령어 목록을 받음
{명령어:{인풋형식:컴포넌트,함수:실행함수}}
*/
import React, { useState } from "react";
import { initGraphColor } from "src/function/Graph/GraphFunc";
import { GraphType } from "src/types/graphtype";
import { CommandType } from "src/types/proptype";

interface proptype{
    commands:CommandType,
    graph:GraphType,
    setGraph:React.Dispatch<React.SetStateAction<GraphType>>
    className:string
}

const Console = ({ commands,graph,setGraph,className }:proptype) => {
    const [selectedOption, setSelectedOption] = useState('DFS');

    const handleSelectChange = (event) => {
        setGraph(initGraphColor(graph));
        setSelectedOption(event.target.value);
    };

    return (
        <div className={className}>
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


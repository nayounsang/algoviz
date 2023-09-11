import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { initGraphColor } from "src/function/Graph/GraphFunc";
import { GraphType } from "src/types/graphtype";
import { CommandType } from "src/types/proptype";
import { selectStyle } from "src/style/layout/consoleStyle";

interface proptype {
    commands: CommandType,
    graph: GraphType,
    setGraph: React.Dispatch<React.SetStateAction<GraphType>>
    style: Object
}

const Console = ({ commands, graph, setGraph, style }: proptype) => {
    const [selectedMenuItem, setSelectedMenuItem] = useState('DFS');

    const handleSelectChange = (event) => {
        setGraph(initGraphColor(graph));
        setSelectedMenuItem(event.target.value);
    };

    return (
        <div style={style}>
            <div style = {selectStyle}>
                <FormControl size="small" sx={{
                    width: '80%'
                }}>
                    <InputLabel >알고리즘</InputLabel>

                    <Select label="알고리즘" value={selectedMenuItem} onChange={handleSelectChange}>
                        {Object.keys(commands).map((key, index) => (
                            <MenuItem key={index} value={key}>
                                {key}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            {commands[selectedMenuItem]}
        </div>
    )
}

export default Console;


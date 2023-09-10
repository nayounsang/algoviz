import React, { useState } from "react";
import { GraphToAdjList } from "src/function/Graph/GraphFunc";
import { GraphType } from "src/types/graphtype";

interface proptype {
    graph: GraphType
}

const ShowAdjList = ({ graph }: proptype) => {
    const adjList = GraphToAdjList(graph);
    const [activeSection, setActiveSection] = useState(graph.nodes.length !== 0? graph.nodes.reduce((obj, node) => {
        obj[node.id] = false;
        return obj
    }):{});
    const handleSectionClick = (node: string) => {
        let tmp = {...activeSection};
        tmp[node] = !tmp[node];
        setActiveSection(tmp);
    };

    return (
        <div style={{ overflow: 'auto', maxHeight: '200px', width: '80%' }}>
            {Object.keys(adjList).map((node) => (
                <div key={node} onClick={() => handleSectionClick(node)} style={{
                    cursor: 'pointer',
                    borderBottom: '0.1px solid black',
                   
                }}>
                    <p style={{ marginTop: '0.1px', marginBottom: '0,1px' }}>
                        {node}
                        {!activeSection[node] ? ' ▲' : ' ▼'}
                    </p>
                    {activeSection[node] && <p>{adjList[node].join(', ')}</p>}
                </div>
            ))}
        </div>
    )
}

export default ShowAdjList;

/*
const adjList = GraphToAdjList(graph);
    const [activeSection, setActiveSection] = useState(null);

    const handleSectionClick = (node: string) => {
        if (activeSection === node) {
            setActiveSection(null);
        } else {
            setActiveSection(node);
        }
    };
    
    return (
        <div style={{overflow:'auto',maxHeight:'200px'}}>
            {Object.keys(adjList).map((node) => (
                <div key={node} onClick={() => handleSectionClick(node)} style ={{
                    cursor:'pointer',
                    borderBottom:'0.1px solid black',
                    width:'80%'
                }}>
                    <p style={{marginTop:'0.1px',marginBottom:'0,1px'}}>
                        {node}
                        {activeSection === node ? ' ▲' : ' ▼'}
                    </p>
                    {activeSection === node && <p>{adjList[node].join(', ')}</p>}
                </div>
            ))}
        </div>
    )
}
*/
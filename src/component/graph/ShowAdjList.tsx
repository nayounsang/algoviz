import React, { useState } from "react";
import { GraphToAdjList } from "src/function/Graph/GraphFunc";

const ShowAdjList = ({ graph }) => {
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
        <div style={{overflow:'scroll'}}>
            {Object.keys(adjList).map((node) => (
                <div key={node} onClick={() => handleSectionClick(node)} style ={{
                    cursor:'pointer',
                    border:'0.5px solid black',
                }}>
                    <p>
                        {node}
                        {activeSection === node ? ' ▲' : ' ▼'}
                    </p>
                    {activeSection === node && <p>{adjList[node].join(', ')}</p>}
                </div>
            ))}
        </div>
    )
}

export default ShowAdjList;
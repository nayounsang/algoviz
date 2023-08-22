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
        <div>
            {Object.keys(adjList).map((node) => (
                <div key={node} onClick={() => handleSectionClick(node)} style ={{
                    cursor:'pointer',
                    border:'1px solid black',
                }}>
                    <h4>
                        {node}
                        {activeSection === node ? ' ▲' : ' ▼'}
                    </h4>
                    {activeSection === node && <p>{adjList[node].join(', ')}</p>}
                </div>
            ))}
        </div>
    )
}

export default ShowAdjList;
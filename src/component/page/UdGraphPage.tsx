import React, { useState } from "react";
import GraphArea from "../graph/GraphArea";
import Console from "../console/Console";
import { GraphType } from "src/types/graphtype";
import DFSinterface from "../console/DFSInterface";
import BFSinterface from "../console/BFSinterface";


const UdGraphPage = () => {
    const [graph, setGraph] = useState<GraphType>({ nodes: [], edges: [] });
    const [message, setMessage] = useState<string>('');
   
    const udgAlgo = {
        DFS: <DFSinterface
            graph={graph}
            setGraph={setGraph}
            message={message}
            setMessage={setMessage}
           
           />,
        BFS: <BFSinterface
            graph={graph}
            setGraph={setGraph}
            message={message}
            setMessage={setMessage}
           
             />,
    }


    return (
        <div>
            <GraphArea options={{
                edges: {
                    arrows: {
                        to: { enabled: false }
                    }
                }
            }}
                direct={false}
                graph={graph}
                setGraph={setGraph}
                message={message}
                setMessage={setMessage} />
            <Console commands={udgAlgo} graph={graph} setGraph={setGraph} />

        </div>
    )
}

export default UdGraphPage;
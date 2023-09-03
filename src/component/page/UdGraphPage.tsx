import React, { useState } from "react";
import Console from "../console/Console";
import { GraphType } from "src/types/graphtype";
import DFSinterface from "../console/DFSInterface";
import BFSinterface from "../console/BFSinterface";
import Message from "../message/Message";
import DijkstraInterface from "../console/DijkstraInterface";
import '../../style/layout/graphpage.css';
import SelectDiv from "../graph/SelectDiv";
import Info from "../info/Info";
import Graph from "react-vis-network-graph";
import MyAppbar from "../MyAppbar";


const UdGraphPage = () => {
    const [graph, setGraph] = useState<GraphType>({ nodes: [], edges: [] });
    const [message, setMessage] = useState<React.JSX.Element[]>([]);

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
        Dijkstra: <DijkstraInterface
            graph={graph}
            setGraph={setGraph}
            message={message}
            setMessage={setMessage} />,
    }


    return (
        <div className="page">
            <MyAppbar title="무향그래프" className="appbar"/>
            <SelectDiv graph={graph} setGraph={setGraph} direct={false} message={message} setMessage={setMessage} />
            <div className="graph">
                <Graph graph={graph} options={{
                    edges: {
                        arrows: {
                            to: { enabled: false }
                        }
                    }
                }} />
            </div>
            <Console commands={udgAlgo} graph={graph} setGraph={setGraph} className="console" />
            <Info className="info" />
            <Message message={message} setMessage={setMessage} className="message" />
        </div>
    )
}

export default UdGraphPage;
import { EdgeType, GraphType, NodeType } from "src/types/graphtype";
import { nodeInGraph } from "./GraphFunc";
import React from "react";

export const addNode = (g: GraphType, nodeId: string, msg: React.JSX.Element[]): [GraphType, React.JSX.Element[]] => {
    if (!nodeInGraph(g, nodeId)) {
        return (
            [{
                nodes: [...g.nodes, { id: nodeId, label: nodeId, color: '#ffffff' }],
                edges: [...g.edges],
            }, [...msg]]
        )
    }

    return (
        [{
            nodes: [...g.nodes],
            edges: [...g.edges],
        }, [...msg, <p key={msg.length}>{`${nodeId}: 이미 그래프내에 존재하는 정점입니다.`}</p>]]
    )

}

export const removeNode = (g: GraphType, nodeId: string, msg: React.JSX.Element[]): [GraphType, React.JSX.Element[]] => {
    if (nodeInGraph(g, nodeId)) {
        return (
            [{
                nodes: g.nodes.filter((n: NodeType) => n.id !== nodeId),
                edges: g.edges.filter((e: EdgeType) => e.from !== nodeId && e.to !== nodeId)
            }, [...msg]]
        )
    }
    return (
        [{
            nodes: [...g.nodes],
            edges: [...g.edges]
        }, [...msg, <p key={msg.length}>{`${nodeId}: 그래프내에 존재하지 않는 정점입니다.`}</p>]]
    )

}

export const setNodeColor = (g: GraphType, nodeId: string, color: string): GraphType => {
    if (nodeInGraph(g, nodeId)) {
        return (
            {
                nodes: g.nodes.map((n: NodeType) => {
                    if (n.id === nodeId) {
                        return { ...n, color: color }
                    } else {
                        return { ...n }
                    }
                }),
                edges: [...g.edges],
            }
        )
    }
}

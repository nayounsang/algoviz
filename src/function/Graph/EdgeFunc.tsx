import { EdgeType, GraphType } from "src/types/graphtype"
import { edgeInGraph, nodeInGraph } from "./GraphFunc";
import React from "react";


export const addEdge = (g: GraphType,
    from: string,
    to: string,
    label: string | undefined = undefined,
    ): GraphType => {
    if (!nodeInGraph(g, from) && !nodeInGraph(g, to)) {
        return (
            {
                nodes: [...g.nodes, { id: to, label: to, color: '#ffffff' }, { id: from, label: from, color: '#ffffff' }],
                edges: [...g.edges, { from: from, to: to, label: label }]
            }
        )
    }
    if (!nodeInGraph(g, from)) {
        return (
            {
                nodes: [...g.nodes, { id: from, label: from, color: '#ffffff' }],
                edges: [...g.edges, { from: from, to: to, label: label }]
            }
        )
    }
    if (!nodeInGraph(g, to)) {
        return (
            {
                nodes: [...g.nodes, { id: to, label: to, color: '#ffffff' }],
                edges: [...g.edges, { from: from, to: to, label: label }]
            }
        )
    }
    return (
        {
            nodes: [...g.nodes],
            edges: [...g.edges, { from: from, to: to, label: label }]
        }
    )
}

export const removeEdge = (g: GraphType, from: string, to: string,msg:React.JSX.Element[]): [GraphType,React.JSX.Element[]] => {
    if (!edgeInGraph(g,from,to)){
        return (
            [{
                nodes:[...g.nodes],
                edges:[...g.edges],
            },[...msg,<p key = {msg.length}>{`${from},${to}: 존재하지 않는 간선입니다.`}</p>]]
        )
    }
    return (
        [{
            nodes: [...g.nodes],
            edges: g.edges.filter((e: EdgeType) => e.from !== from || e.to !== to)
        },[...msg]]
    )
}


export const setEdgeColor = (g:GraphType,from:string,to:string,color:string):GraphType => {
    if (edgeInGraph(g,from,to)){
        return (
            {
                nodes:[...g.nodes],
                edges:g.edges.map((e:EdgeType)=>{
                    if (e.from === from && e.to === to){
                        return {...e,color:color}
                    } else {
                        return {...e}
                    }
                }),
            }
        )
    }
}
import { EdgeType, GraphType } from "src/types/graphtype"
import { edgeInGraph, nodeInGraph } from "./GraphFunc";


//arrow '':무향 to:유향
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

export const removeEdge = (g: GraphType, from: string, to: string): GraphType => {
    return (
        {
            nodes: [...g.nodes],
            edges: g.edges.filter((e: EdgeType) => e.from != from || e.to != to)
        }
    )
}


export const setEdgeColor = (g:GraphType,from:string,to:string,color:string):GraphType => {
    if (edgeInGraph(g,from,to)){
        return (
            {
                nodes:[...g.nodes],
                edges:g.edges.map((e:EdgeType)=>{
                    if (e.from == from && e.to == to){
                        return {...e,color:color}
                    } else {
                        return {...e}
                    }
                }),
            }
        )
    }
}
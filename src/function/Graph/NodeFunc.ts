import { EdgeType, GraphType, NodeType } from "src/types/graphtype";
import { nodeInGraph } from "./GraphFunc";

export const addNode = (g:GraphType,nodeId:string):GraphType => {
    if (!nodeInGraph(g, nodeId)){
        return(
            {
                nodes:[...g.nodes,{id:nodeId,label:nodeId,color:'#ffffff'}],
                edges:[...g.edges],
            }
        )
    }
    return(
        {
            nodes:[...g.nodes],
            edges:[...g.edges],
        }
    )
    
}

export const removeNode = (g:GraphType,nodeId:string):GraphType => {
    if (nodeInGraph(g, nodeId)){
        return(
            {
                nodes:g.nodes.filter((n:NodeType)=>n.id != nodeId),
                edges:g.edges.filter((e:EdgeType)=>e.from!=nodeId && e.to!=nodeId)
            }
        )
    }
    return(
        {
            nodes:[...g.nodes],
            edges:[...g.edges]
        }
    )
    
}

export const setNodeColor = (g:GraphType,nodeId:string,color:string):GraphType => {
    if (nodeInGraph(g, nodeId)){
        return (
            {
                nodes:g.nodes.map((n:NodeType)=>{
                    if (n.id == nodeId){
                        return {...n,color:color}
                    } else {
                        return {...n}
                    }
                }),
                edges:[...g.edges],
            }
        )

    }
}

import { EdgeType, GraphType,NodeType,adjListType } from "src/types/graphtype"

export const nodeInGraph = (g:GraphType,id:string):boolean => {
    for (const n of g.nodes){
        if (n.id === id){
            return true
        }
    }
    return false
}

export const edgeInGraph = (g:GraphType,from:string,to:string):boolean => {
    for (const e of g.edges){
        if (e.from === from && e.to === to){
            return true
        }
    }
    return false
}


export const GraphToAdjList = (g:GraphType):adjListType => {
    let result:adjListType = {}
    for (const n of g.nodes){
        result[n.id] = [];
    }
    for (const e of g.edges){
        result[e.from].push(e.label === undefined? e.to:`(${e.to}, ${e.label})`)
    }
    return result;
}




export const RawAdjList = (g:GraphType) => {
    let result = {}
    for (const n of g.nodes){
        result[n.id] = {};
    }
    for (const e of g.edges){
        result[e.from][e.to] = e.label;
    }
    return result;
}

export const initVisit = (g:GraphType,f:any) => {
    let result = {}
    for (const n of g.nodes){
        result[n.id] = f;
    }
    return result
}

export const initGraphColor = (g:GraphType) => {
    return(
        {
            nodes:g.nodes.map((n:NodeType)=>{
                return {...n,color:'#ffffff'}
            }),
            edges:g.edges.map((e:EdgeType)=>{
                return {from:e.from,to:e.to,label:e.label}
            })
        }
    )
}

export const isVaildWeightGraph = (g:GraphType):[boolean,string] => {
    g.edges.forEach((e:EdgeType)=>{
        const tmp = Number(e.label);
        if (Number.isNaN(tmp)){
            return [false,`${e.from}->${e.to}간선에 올바르지 못한 가중치를 할당했습니다.`]
        }
    })
    return [true,'']
}
export interface NodeType {
    id:string,
    label:string,
    color:string,
}

export interface EdgeType{
    from:string,
    to:string,
    label?:undefined|string,
    color?:string,
}

export interface GraphType {
    nodes:NodeType[],
    edges:EdgeType[],
}


export interface adjListType {
    [key:string]:string[]
}
import React from "react";
import { GraphType } from "./graphtype";

export interface GraphPropType {
    graph: GraphType,
    setGraph: React.Dispatch<React.SetStateAction<GraphType>>
    direct?: boolean
}
export interface PagePropType {
    graph: GraphType,
    setGraph: React.Dispatch<React.SetStateAction<GraphType>>,
    message: string,
    setMessage: React.Dispatch<React.SetStateAction<string>>,
    direct: boolean,
    options: Object,
}

export interface CommandType{
    [key:string]:React.JSX.Element,
}


import React from "react";
import { GraphType } from "./graphtype";

export interface GraphPropType {
    graph: GraphType,
    setGraph: React.Dispatch<React.SetStateAction<GraphType>>
    direct?: boolean,
    message?:  React.JSX.Element[],
    setMessage?:React.Dispatch<React.SetStateAction< React.JSX.Element[]>>,
    style?:Object,
}
export interface PagePropType {
    graph: GraphType,
    setGraph: React.Dispatch<React.SetStateAction<GraphType>>,
    message: React.JSX.Element[],
    setMessage: React.Dispatch<React.SetStateAction<React.JSX.Element[]>>,
    direct: boolean,
    options: Object,
}

export interface CommandType{
    [key:string]:React.JSX.Element,
}


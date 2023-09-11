import React from "react";
import { isEdgeType, isPqType, isVisitType } from "../TypeGuard";


const makeString = (tar: any) => {
    if (isEdgeType(tar)) {
        return `${tar.from}-${tar.to}`
    }
    if (isVisitType(tar)) {
        let tmp = [];
        Object.keys(tar).map((e) => {
            tmp.push(`(${e}: ${tar[e]})`);
        })
        return tmp.join(', ');
    }
    if (isPqType(tar)) {
        let tmp = [];
        tar.map((e: [number, string]) => {
            tmp.push(`(거리:${e[0]}, 정점:${e[1]})`);
        })
        return `[${tmp.join(', ')}]`;
    }
    if (Array.isArray(tar)) {
        return `[${tar.join(', ')}]`;
    }
    return tar.toString();
}


export const makeInfo = (infoArr: [string, any][]): React.JSX.Element[] => {
    return infoArr.map((e, index) => <p key={index}>{e[0]}: {makeString(e[1])}</p>);
}
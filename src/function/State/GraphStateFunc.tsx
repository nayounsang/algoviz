import { GraphType } from "src/types/graphtype";
import { ClassifyEdge } from "../Vaild/ClassifyEdge";
import { addEdge, removeEdge } from "../Graph/EdgeFunc";
import { addNode, removeNode } from "../Graph/NodeFunc";
import React from "react";

// 간선 추가시 중복간선은 그냥 추가하고, 삭제할땐 중복간선에 해당하는 모든 간선을 삭제한다 옳은걸까?


const addEach = (each: string,
    graph: GraphType,
    direct: boolean,
    msg: React.JSX.Element[]): [GraphType, React.JSX.Element[]] => {
    let result = { ...graph };
    each = each.trim();
    const c = ClassifyEdge(each);
    const splitEach = each.split(' ');

    if (c === 'node') {
        [result, msg] = addNode(result, splitEach[0], msg);
    }
    else if (c === 'uwedge') {
        result = addEdge(result, splitEach[0], splitEach[1]);
        if (!direct) {
            result = addEdge(result, splitEach[1], splitEach[0]);
        }

    }
    else if (c === 'wedge') {
        result = addEdge(result, splitEach[0], splitEach[1], splitEach[2]);
        if (!direct) {
            result = addEdge(result, splitEach[1], splitEach[0], splitEach[2]);
        }
    }
    else {
        msg = [...msg,<p key = {msg.length}>{ `${each}는 잘못된 입력입니다.`}</p>];
    }
    return [result, msg];
}


export const addGraph = (infoString: string,
    graph: GraphType,
    direct: boolean,
    msg: React.JSX.Element[]): [GraphType, React.JSX.Element[]] => {
    let result = { ...graph }
    const splitByLine = infoString.split('\n');

    for (const each of splitByLine) {
        [result, msg] = addEach(each, result, direct, msg);
    }

    return [result, msg];
}

const removeEach = (each: string,
    graph: GraphType,
    direct: boolean,
    msg: React.JSX.Element[]): [GraphType, React.JSX.Element[]] => {
    let result = { ...graph };
    each = each.trim();
    const c = ClassifyEdge(each);
    const splitEach = each.split(' ');
    let tmp:any;

    if (c === 'node') {
        [result, msg] = removeNode(result, splitEach[0], msg);
    }
    else if (c === 'uwedge') {
        [result, msg] = removeEdge(result, splitEach[0], splitEach[1], msg);
        if (!direct){
            [result, tmp] = removeEdge(result, splitEach[1], splitEach[0], msg);
        }
    }


    return [result, msg];
}

export const removeGraph = (infoString: string,
    graph: GraphType,
    direct: boolean,
    msg: React.JSX.Element[]): [GraphType, React.JSX.Element[]] => {
    let result = { ...graph }
    const splitByLine = infoString.split('\n');

    for (const each of splitByLine) {
        [result, msg] = removeEach(each, result, direct, msg);
    }

    return [result, msg];
}
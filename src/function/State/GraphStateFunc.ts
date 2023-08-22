import { GraphType } from "src/types/graphtype";
import { ClassifyEdge } from "../Vaild/ClassifyEdge";
import { addEdge, removeEdge } from "../Graph/EdgeFunc";
import { addNode, removeNode } from "../Graph/NodeFunc";

const addEach = async (each: string, graph: GraphType, direct: boolean) => {
    let result = { ...graph };
    each = each.trim();
    const c = ClassifyEdge(each);
    const splitEach = each.split(' ');
    if (c == 'node') {
        result = addNode(result, splitEach[0]);
    }
    else if (c == 'uwedge') {
        result = addEdge(result, splitEach[0], splitEach[1]);
        if (!direct) {
            result = addEdge(result, splitEach[1], splitEach[0]);
        }

    }
    else if (c == 'wedge') {
        result = addEdge(result, splitEach[0], splitEach[1], splitEach[2]);
        if (!direct) {
            result = addEdge(result, splitEach[1], splitEach[0], splitEach[2]);
        }
    }
    return result;
}


export const addGraph = async (infoString: string,
    graph: GraphType,
    direct: boolean) => {
    let result = { ...graph }
    const splitByLine = infoString.split('\n');
    for (const each of splitByLine) {
        result = await addEach(each, result, direct);
    }
   
    return result;
}

const removeEach = async (each: string, graph: GraphType) => {
    let result = { ...graph };
    each = each.trim();
    const c = ClassifyEdge(each);
    const splitEach = each.split(' ');
    if (c == 'node') {
        result = removeNode(result, splitEach[0]);
    }
    else if (c == 'uwedge') {
        result = removeEdge(result, splitEach[0], splitEach[1]);
        

    }
    return result;
}

export const removeGraph = async (infoString: string,
    graph: GraphType) => {
    let result = { ...graph }
    const splitByLine = infoString.split('\n');
    for (const each of splitByLine) {
        result = await removeEach(each, result);
    }
    
    return result;
}
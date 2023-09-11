import deepcopy from "deepcopy";
import { EdgeType, GraphType } from "src/types/graphtype";

export const topoProceed = (node: string, graph: GraphType, indeg: { [key: string]: number }): [string[], { [key: string]: number }] => {
    let newNodes = [];
    let newIndegs = deepcopy(indeg);
    graph.edges.forEach((e: EdgeType) => {
        if (e.from === node) {
            newIndegs[e.to] -= 1;
            if (newIndegs[e.to] === 0) {
                newNodes.push(e.to);
            }
        }
    })
    return [newNodes, newIndegs];
} 
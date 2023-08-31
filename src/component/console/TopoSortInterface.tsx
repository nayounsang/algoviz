import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newVisitColor, usedEdge } from "src/const/color";
import { setEdgeColorFromNode } from "src/function/Graph/EdgeFunc";
import { getIndegree, initGraphColor, initTopoQueue } from "src/function/Graph/GraphFunc";
import { setNodeColor } from "src/function/Graph/NodeFunc";
import { topoProceed } from "src/function/State/AlgoFunc";
import { cannotProceed, cantTurnBack, emptyTopoQueue } from "src/function/State/MessageFunc";
import { setArr, setCurNode, setHistory, setVisit } from "src/store/algoslice";
import { RootState } from "src/store/store";

const TopoSortInterface = ({
    graph,
    setGraph,
    message,
    setMessage,
}) => {


    const [active, setActive] = useState(false);
    const [enableProcess, setEnableProcess] = useState(false);
    const [enableBack, setEnableBack] = useState(false);


    const dispatch = useDispatch();
    // 위상정렬:q,curNode,visit(indeg)
    const arr = useSelector((state: RootState) => state.algo.arr);
    const visit = useSelector((state: RootState) => state.algo.visit);
    const curNode = useSelector((state: RootState) => state.algo.curNode);
    const history = useSelector((state: RootState) => state.algo.history);







    const initButton = (bool: boolean) => {
        setActive(bool);
        setEnableProcess(bool);
        setEnableBack(bool);
    }

    const initInfo = (value:boolean) => {
        const indeg = getIndegree(graph);
        const q = initTopoQueue(indeg);
        dispatch(setArr(!value  ? [] : [...q]));
        dispatch(setVisit(!value  ? {} : { ...indeg }));
        dispatch(setCurNode(''));
        dispatch(setHistory(!value ? [] : [{ arr: [...q], visit: { ...indeg }, curNode: '' }]));
    }

    const handleButtonClick = () => {
        if (!active) {
            initInfo(true);
            initButton(true);

        }
        else {
            initButton(false);
            initInfo(false);
            setGraph(initGraphColor(graph));
        }
    };

    const handleProccessClick = () => {
        if (arr.length !== 0) {
            let queue = [...arr];
            const node = queue.shift();
            const [newNodes, newIndeg] = topoProceed(node, graph, visit);
            queue = [...queue, ...newNodes];


            dispatch(setCurNode(node));
            dispatch(setArr([...queue]));
            dispatch(setVisit({ ...newIndeg }));
            dispatch(setHistory([...history, { arr: [...queue], visit: { ...newIndeg }, curNode: node }]));
            setGraph(setEdgeColorFromNode(setNodeColor(graph, node, newVisitColor), node, usedEdge));
        } else {
            setMessage(cannotProceed(message));
        }
    }

    const handleBackClick = () => {
        console.log(history);
        if (history.length <= 1) {
            setMessage(cantTurnBack(message));
            return
        }

        let tmpHistory = [...history];
        const lastNode = tmpHistory.pop().curNode;
        const last = tmpHistory[tmpHistory.length - 1];

        dispatch(setCurNode(last.curNode));
        dispatch(setArr([...last.arr]));
        dispatch(setVisit({ ...last.visit }));
        dispatch(setHistory([...tmpHistory]));
        setGraph(setEdgeColorFromNode(setNodeColor(graph, lastNode, "#ffffff"), lastNode, '#000000'));
    }

    return (
        <div>
            <button onClick={handleButtonClick}>{active ? '중지' : '시작'}</button>
            <button disabled={!enableProcess} onClick={handleProccessClick}>진행하기</button>
            <button disabled={!enableBack} onClick={handleBackClick}>뒤로가기</button>
        </div>
    )
}

export default TopoSortInterface;
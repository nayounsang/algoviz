import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newVisitColor, usedEdge } from "src/const/color";
import { setEdgeColorFromNode } from "src/function/Graph/EdgeFunc";
import { getIndegree, initGraphColor, initTopoQueue } from "src/function/Graph/GraphFunc";
import { setNodeColor } from "src/function/Graph/NodeFunc";
import { topoProceed } from "src/function/State/AlgoFunc";
import { makeInfo } from "src/function/State/InfoFunc";
import { cannotProceed, cantTurnBack, emptyTopoQueue } from "src/function/State/MessageFunc";
import { setArr, setCurNode, setHistory, setPath, setVisit } from "src/store/algoslice";
import { setInfo } from "src/store/infoslice";
import { RootState } from "src/store/store";
import { ButtonGroup } from "@mui/material";
import { BlueButton, GreenButton, RedButton } from "../styled/StyledButton";
import { buttongroupStyle, inputStyle, inputgroupStyle } from "src/style/layout/consoleStyle";

const transInfo = {
    arr: '큐',
    visit: '진입차수',
    curNode: '현재 정점',
    path: '경로'
}

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
    const arr = useSelector((state: RootState) => state.algo.arr);
    const visit = useSelector((state: RootState) => state.algo.visit);
    const curNode = useSelector((state: RootState) => state.algo.curNode);
    const history = useSelector((state: RootState) => state.algo.history);
    const path = useSelector((state: RootState) => state.algo.path);

    const initButton = (bool: boolean) => {
        setActive(bool);
        setEnableProcess(bool);
        setEnableBack(bool);
    }

    const initInfo = (value: boolean) => {
        const indeg = getIndegree(graph);
        const q = initTopoQueue(indeg);
        dispatch(setArr(!value ? [] : [...q]));
        dispatch(setVisit(!value ? {} : { ...indeg }));
        dispatch(setCurNode(''));
        dispatch(setPath([]));
        dispatch(setHistory(!value ? [] : [{ arr: [...q], visit: { ...indeg }, curNode: '', path: [] }]));
        dispatch(setInfo(makeInfo(!value ? [] :
            [[transInfo.curNode, ''],
            [transInfo.arr, [...q]],
            [transInfo.visit, { ...indeg }],
            [transInfo.path, []]])));
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
            dispatch(setPath([...path, node]));
            dispatch(setHistory([...history, { arr: [...queue], visit: { ...newIndeg }, curNode: node, path: [...path, node] }]));
            dispatch(setInfo(makeInfo(
                [[transInfo.curNode, node],
                [transInfo.arr, [...queue]],
                [transInfo.visit, { ...newIndeg }],
                [transInfo.path, [...path, node]]])));
            setGraph(setEdgeColorFromNode(setNodeColor(graph, node, newVisitColor), node, usedEdge));
        } else {
            setMessage(cannotProceed(message));
        }
    }

    const handleBackClick = () => {
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
        dispatch(setPath([...last.path]));
        dispatch(setHistory([...tmpHistory]));
        dispatch(setInfo(makeInfo(
            [[transInfo.curNode, last.curNode],
            [transInfo.arr, [...last.arr]],
            [transInfo.visit, { ...last.visit }],
            [transInfo.path, [...last.path]]])));
        setGraph(setEdgeColorFromNode(setNodeColor(graph, lastNode, "#ffffff"), lastNode, '#000000'));
    }

    return (
        <div style = {inputgroupStyle}>
            <div style={inputStyle}>
                <BlueButton onClick={handleButtonClick}>{active ? '중지' : '시작'}</BlueButton>
            </div>
            <div style={buttongroupStyle}>
                <ButtonGroup>
                    <GreenButton disabled={!enableProcess} onClick={handleProccessClick}>진행하기</GreenButton>
                    <RedButton disabled={!enableBack} onClick={handleBackClick}>뒤로가가</RedButton>
                </ButtonGroup>
            </div>
        </div>
    )
}

export default TopoSortInterface;
import React, { useState } from "react";
import { PriorityQueue } from "@datastructures-js/priority-queue";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store/store";
import { setCurNode, setHistory, setPq, setVisit } from "src/store/algoslice";
import { initGraphColor, isVaildWeightGraph, nodeInGraph } from "src/function/Graph/GraphFunc";
import deepcopy from "deepcopy";
import { EdgeType } from "src/types/graphtype";
import { setNodeColor } from "src/function/Graph/NodeFunc";
import { newVisitColor } from "src/const/color";
import { cannotProceed, cantTurnBack, plzInputExist, plzInputStart, wrongWeightEdge } from "src/function/State/MessageFunc";
import { setInfo } from "src/store/infoslice";
import { makeInfo } from "src/function/State/InfoFunc";
import { BlueButton, GreenButton, RedButton } from "../styled/StyledButton";
import { ButtonGroup } from "@mui/material";
import { inputgroupStyle,inputStyle,buttonStyle,buttongroupStyle } from "src/style/layout/consoleStyle";

const transInfo = {
    pq: '우선순위 큐',
    visit: '시작 정점으로부터 최소거리',
    curNode: '현재 정점',
}


const DijkstraInterface = ({
    graph,
    setGraph,
    message,
    setMessage,
}) => {

    const [inputValue, setInputValue] = useState('');
    const [active, setActive] = useState(false);
    const [enableProcess, setEnableProcess] = useState(false);
    const [enableBack, setEnableBack] = useState(false);


    const dispatch = useDispatch();
    const pq = useSelector((state: RootState) => state.algo.pq);
    const visit = useSelector((state: RootState) => state.algo.visit);
    const curNode = useSelector((state: RootState) => state.algo.curNode);
    const history = useSelector((state: RootState) => state.algo.history);





    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const initButton = (bool: boolean) => {
        setActive(bool);
        setEnableProcess(bool);
        setEnableBack(bool);
    }

    const initInfo = (value: string | undefined) => {
        const tmp = {}
        if (value !== undefined) {
            tmp[value] = 0;
        }
        dispatch(setPq(value !== undefined ? [[0, value]] : []));
        dispatch(setVisit(tmp));
        dispatch(setCurNode(''));
        dispatch(setHistory(value !== undefined ? [{ pq: [[0, value]], visit: tmp, curNode: '' }] : []));
        dispatch(setInfo(value !== undefined ? makeInfo([[transInfo.curNode, ''], [transInfo.pq, [[0, value]]], [transInfo.visit, tmp]]) : []))

    }

    const handleButtonClick = () => {
        if (!active) {
            if (inputValue === '') {
                setMessage(plzInputStart(message))
                return
            }
            if (!nodeInGraph(graph, inputValue)) {
                setMessage(plzInputExist(message, inputValue));
                return
            }
            const [vaild, errorMsg] = isVaildWeightGraph(graph);
            if (!vaild) {
                setMessage(wrongWeightEdge(message, errorMsg));
                return
            }
            initButton(true);
            initInfo(inputValue);
        }
        else {

            initButton(false);
            initInfo(undefined);
            setGraph(initGraphColor(graph));

        }
    };

    const handleProccessClick = () => {
        if (pq.length !== 0) {
            let heap = PriorityQueue.fromArray<[number, string]>(deepcopy(pq), (a, b) => {
                if (a[0] < b[0]) {
                    return -1;
                }
                return 1;

            });
            let tmpVisit = { ...visit };
            let tmpHistory = [...history];

            const [dist, node] = heap.dequeue();

            const adjEdge: EdgeType[] = graph.edges.filter((e: EdgeType) => e.from === node);
            adjEdge.forEach((e: EdgeType) => {
                const d = Number(e.label);
                if (!(e.to in tmpVisit)) {
                    tmpVisit[e.to] = dist + d;
                    heap.enqueue([dist + d, e.to]);
                } else if (d + dist < tmpVisit[e.to]) {
                    tmpVisit[e.to] = dist + d;
                    heap.enqueue([dist + d, e.to]);
                }
            })

            deepcopy(heap.toArray());




            dispatch(setCurNode(node));
            dispatch(setPq(deepcopy(heap.toArray())));
            dispatch(setVisit(tmpVisit));
            dispatch(setHistory([...tmpHistory, { pq: deepcopy(heap.toArray()), visit: tmpVisit, curNode: node }]));
            dispatch(setInfo(makeInfo([[transInfo.curNode, node], [transInfo.pq, deepcopy(heap.toArray())], [transInfo.visit, tmpVisit]])));
            setGraph(setNodeColor(initGraphColor(graph), node, newVisitColor));



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
        tmpHistory.pop();
        let last = tmpHistory[tmpHistory.length - 1];

        dispatch(setCurNode(last.curNode));
        dispatch(setPq([...last.pq]));
        dispatch(setVisit({ ...last.visit }));
        dispatch(setHistory([...tmpHistory]));
        dispatch(setInfo(makeInfo([[transInfo.curNode, last.curNode], [transInfo.pq, last.pq], [transInfo.visit, last.visit]])));
        setGraph(setNodeColor(initGraphColor(graph), last.curNode, newVisitColor));
    }

    return (
        <div style = {inputgroupStyle}>
            <input type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="시작 정점"
                style={inputStyle} />
            <div style={buttonStyle}>
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

export default DijkstraInterface;

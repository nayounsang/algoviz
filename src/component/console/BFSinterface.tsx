import React, { useState } from "react";
import { newVisitColor } from "src/const/color";
import { initGraphColor, nodeInGraph } from "src/function/Graph/GraphFunc";
import { setNodeColor } from "src/function/Graph/NodeFunc";
import { EdgeType } from "src/types/graphtype";

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "src/store/store";
import { setArr, setPath, setCurNode, setHistory } from "src/store/algoslice";
import { cannotProceed, cantTurnBack, plzInputExist, plzInputStart } from "src/function/State/MessageFunc";
import { setInfo } from "src/store/infoslice";
import { makeInfo } from "src/function/State/InfoFunc";

const transInfo = {
    arr: '큐',
    path: '방문 정점',
    curNode: '현재 정점',
}

const BFSinterface = ({
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
    const arr = useSelector((state: RootState) => state.algo.arr);
    const path = useSelector((state: RootState) => state.algo.path);
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
        dispatch(setArr(value !== undefined ? [value] : []));
        dispatch(setPath(value !== undefined ? [value] : []));
        dispatch(setCurNode(''));
        dispatch(setHistory(value !== undefined ? [{ arr: [value], path: [value], curNode: '' }] : []));
        dispatch(setInfo(value !== undefined ? makeInfo([[transInfo.curNode, ''], [transInfo.arr, [value]], [transInfo.path, [value]]]) : []))
    }

    const handleButtonClick = () => {
        if (!active) {
            if (inputValue == '') {
                setMessage(plzInputStart(message));
                return
            }
            if (!nodeInGraph(graph, inputValue)) {
                setMessage(plzInputExist(message, inputValue));
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
        if (arr.length != 0) {
            let queue = [...arr];
            let tmpPath = [...path];
            let tmpHistory = [...history]

            const node = queue.shift()

            const adjNode = graph.edges.filter((e: EdgeType) => e.from === node && !path.includes(e.to)).map((e: EdgeType) => e.to);
            queue = [...queue, ...adjNode];
            tmpPath = [...tmpPath, ...adjNode];


            dispatch(setCurNode(node));
            dispatch(setArr(queue));
            dispatch(setPath(tmpPath));
            dispatch(setHistory([...tmpHistory, { arr: queue, path: tmpPath, curNode: node }]));
            dispatch(setInfo(makeInfo([[transInfo.curNode, node], [transInfo.arr, queue], [transInfo.path, tmpPath]])));
            setGraph(setNodeColor(graph, node, newVisitColor));



        } else {
            setMessage(cannotProceed(message))
        }
    }

    const handleBackClick = () => {
        if (history.length <= 1) {
            setMessage(cantTurnBack(message));
            return
        }
        let tmpHistory = [...history];
        let lastNode = tmpHistory.pop().curNode;
        let last = tmpHistory[tmpHistory.length - 1];
        dispatch(setCurNode(last.curNode));
        dispatch(setArr([...last.arr]));
        dispatch(setPath([...last.path]));
        dispatch(setHistory([...tmpHistory]));
        dispatch(setInfo(makeInfo([[transInfo.curNode, last.curNode], [transInfo.arr, last.arr], [transInfo.path, last.path]])));
        setGraph(setNodeColor(graph, lastNode, '#ffffff'));
    }

    return (
        <div>
            <input type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="시작 정점" />
            <button onClick={handleButtonClick}>{active ? '중지' : '시작'}</button>
            <button disabled={!enableProcess} onClick={handleProccessClick}>진행하기</button>
            <button disabled={!enableBack} onClick={handleBackClick}>뒤로가기</button>
        </div>
    )
}

export default BFSinterface;



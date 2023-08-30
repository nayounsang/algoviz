import React, { useState } from "react";
import { newVisitColor } from "src/const/color";
import { initGraphColor, nodeInGraph } from "src/function/Graph/GraphFunc";
import { setNodeColor } from "src/function/Graph/NodeFunc";
import { EdgeType } from "src/types/graphtype";

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "src/store/store";
import { setArr, setPath, setCurNode, setHistory } from "src/store/algoslice";



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
    }

    const handleButtonClick = () => {
        if (!active) {
            if (inputValue == '') {
                setMessage([...message,<p key={message.length}>시작 정점을 입력해주세요.</p>])
                return
            }
            if (!nodeInGraph(graph, inputValue)) {
                setMessage([...message,<p key={message.length}>그래프내에 존재하지 않는 정점입니다.</p>])
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
            dispatch(setHistory([...tmpHistory, { arr: queue, path: tmpPath, curNode: node }]))
            setGraph(setNodeColor(graph, node, newVisitColor));



        } else {
            setMessage([...message,<p key={message.length}>더 이상 진행할 수 없습니다.</p>])
        }
    }

    const handleBackClick = () => {
        if (history.length <= 1) {
            setMessage([...message,<p key={message.length}>더 이상 되돌릴 수 없습니다.</p>])
            return
        }
        let tmpHistory = [...history];
        let lastNode = tmpHistory.pop().curNode;
        let last = tmpHistory[tmpHistory.length - 1];
        dispatch(setCurNode(last.curNode));
        dispatch(setArr([...last.arr]));
        dispatch(setPath([...last.path]));
        dispatch(setHistory([...tmpHistory]));
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



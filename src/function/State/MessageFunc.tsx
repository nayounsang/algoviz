import React from "react"

export const cantTurnBack = (message:React.JSX.Element[]):React.JSX.Element[] => {
    return [...message,<p key={message.length}>더 이상 되돌릴 수 없습니다.</p>];
}

export const cannotProceed = (message:React.JSX.Element[]):React.JSX.Element[] => {
    return [...message,<p key={message.length}>더 이상 진행할 수 없습니다.</p>];
}

export const plzInputStart = (message:React.JSX.Element[]):React.JSX.Element[] => {
    return [...message,<p key={message.length}>시작 정점을 입력해주세요.</p>];
}

export const plzInputExist = (message:React.JSX.Element[],inputValue:string):React.JSX.Element[] => {
    return [...message,<p key={message.length}>{inputValue}: 그래프내 존재하는 정점을 입력해주세요</p>];
}

export const wrongWeightEdge = (message:React.JSX.Element[],errorMsg:string):React.JSX.Element[] => {
    return [...message,<p key={message.length}>{errorMsg}</p>];
}

export const emptyTopoQueue = (message:React.JSX.Element[]):React.JSX.Element[] => {
    return [...message,<p key={message.length}>진입 차수가 0인 정점이 존재하지 않습니다.</p>];
}

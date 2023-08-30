import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { EdgeType } from 'src/types/graphtype';

interface stateType {
    arr: string[],
    path: string[],
    curNode: string,
    visit: { [key: string]: (string | boolean | number) },
    curEdge: EdgeType,
    history: Object[],
    pq:[number,string][],
}

const initialState: stateType = {
    arr: [],
    path: [],
    curNode: '',
    visit: {},
    curEdge: { from: '', to: '' },
    history: [],
    pq:[],

};

const algoSlice = createSlice({
    name: 'algoSlice',
    initialState,
    reducers: {
        setArr: (state, action: PayloadAction<string[]>) => {
            state.arr = [...action.payload];
        },
        setPath: (state, action: PayloadAction<string[]>) => {
            state.path = [...action.payload];
        },
        setCurNode: (state, action: PayloadAction<string>) => {
            state.curNode = action.payload;
        },
        setVisit: (state, action: PayloadAction<{ [key: string]: (string | boolean | number) }>) => {
            state.visit = { ...action.payload };
        },
        setCurEdge: (state, action: PayloadAction<EdgeType>) => {
            state.curEdge = action.payload;
        },
        setHistory: (state, action: PayloadAction<Object[]>) => {
            state.history = action.payload
        },
        setPq: (state,action: PayloadAction<[number,string][]>) => {
            state.pq = action.payload;
        }

    },
})


export const { setArr, setPath, setCurNode, setCurEdge, setHistory, setVisit,setPq } = algoSlice.actions;

export default algoSlice.reducer;
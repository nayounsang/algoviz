import deepcopy  from 'deepcopy';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface stateType {
    info:React.JSX.Element[],
}

const initialState: stateType = {
    info:[],
};

const infoSlice = createSlice({
    name: 'infoSlice',
    initialState,
    reducers:{
        setInfo: (state, action: PayloadAction<React.JSX.Element[]>) => {
            state.info = [...action.payload];
        },
        initInfo: (state) => {
            state.info = [];
        },
    }
})

export const {setInfo,initInfo} = infoSlice.actions;
export default infoSlice.reducer;
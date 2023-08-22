import { Reducer, Store, combineReducers, configureStore } from '@reduxjs/toolkit';
import algoReducer from './algoslice';

const rootReducer:Reducer = combineReducers({
    algo:algoReducer,
    // other reducer
});

const store:Store = configureStore({
    reducer: rootReducer,
  });
  

  export type RootState = ReturnType<typeof rootReducer>;
  export default store;

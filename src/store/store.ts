import { Reducer, Store, combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import algoReducer from './algoslice';
import infoReducer from './infoslice';

const rootReducer: Reducer = combineReducers({
    algo: algoReducer,
    info: infoReducer,
});

const store: Store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});


export type RootState = ReturnType<typeof rootReducer>;
export default store;

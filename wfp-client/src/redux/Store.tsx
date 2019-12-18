import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import thunk from "redux-thunk";

import {characterReducer, IExpectancyState} from "./ExpectancyReducer";

export interface IAppState {
    expectancyState: IExpectancyState
}

const rootReducer = combineReducers<IAppState>({
    expectancyState: characterReducer
});

export default function configureStore(): Store<IAppState, any> {
    return createStore(rootReducer, undefined, applyMiddleware(thunk));
}
import {
    AppActions
} from "./action";

import LifeExpectancyModel from "../models/model";

export interface DataListState {
    state: string; // 'INIT', 'LOADING' | 'LOADED' | 'ERROR'
    data: LifeExpectancyModel[],
    errorMessage?: string
}

export function defaultDataListState() {
    return {
        state: 'INIT',
        data: []
    };
}

export function dataListReducer(state: DataListState, action: AppActions): DataListState {
    // Todo:: Write reducers here
    return state;
}
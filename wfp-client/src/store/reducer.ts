import { dataListReducer, DataListState, defaultDataListState} from "./data-list";
import { Action } from "redux";

export interface AppState {
    list: DataListState
}

export function defaultState() {
    return {
        list: defaultDataListState()
    };
}

export function mainReducer(state: AppState = defaultState(), action: Action) {
    return {
        list: dataListReducer(state.list, action)
    }
}
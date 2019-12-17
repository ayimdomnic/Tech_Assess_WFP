import LifeExpectancyModel from '../models/model';
import { Action, Dispatch} from "redux";
import DataService from "../services/data";

export const ACTION_DATA_FETCH = "LIFE_EXPECTANCY_FETCH";
export const ACTION_DATA_FETCH_SUCCESS = "LIFE_EXPECTANCY_FETCH_SUCCESS";
export const ACTION_DATA_FETCH_ERROR = "LIFE_EXPECTANCY_FETCH_ERROR";

export function isAction<A extends Action>(action: Action, type: string): action is A {
    return action.type === type;
}

export interface IActionDataFetch extends Action {
    type: 'LIFE_EXPECTANCY_FETCH'
}

export interface IActionDataFetchSuccess extends Action {
    type: 'LIFE_EXPECTANCY_FETCH_SUCCESS',
    data: LifeExpectancyModel[]
}

export interface IActionDataFetchError extends Action {
    type: 'LIFE_EXPECTANCY_FETCH_ERROR',
    errorMessage: string;
}

export type AppActions = IActionDataFetch | IActionDataFetchSuccess | IActionDataFetchError;

function dispatchFetchDataProgress(): IActionDataFetch {
    return {
        type: ACTION_DATA_FETCH
    };
}

function dispatchFetchDataSuccess(data: LifeExpectancyModel[]): IActionDataFetchSuccess {
    return {
        type: ACTION_DATA_FETCH_SUCCESS,
        data
    }
}

function dispatchFetchNotesError(e: Error): IActionDataFetchError {
    return {
        type: "LIFE_EXPECTANCY_FETCH_ERROR",
        errorMessage: e.message
    }
}

export function actionFetchData() {
    return (dispatch: Dispatch) => {
        dispatch(dispatchFetchDataProgress());
        return DataService.getAll()
            .then((response) => {
                return dispatch(dispatchFetchDataSuccess(response))
            })
            .catch((e: Error) => {
                return dispatch(dispatchFetchNotesError(e))
            });
    };
}
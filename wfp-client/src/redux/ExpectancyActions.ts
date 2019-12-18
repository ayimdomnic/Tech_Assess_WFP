import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import axios from 'axios';
import LifeExpectancyModel from "../models/model";
import {IExpectancyState} from "./ExpectancyReducer";


export enum ExpectancyActionTypes {
    GET_ALL = 'GET_ALL'
}

export interface IExpectancyGetAllAction {
    type: ExpectancyActionTypes.GET_ALL;
    data: LifeExpectancyModel[];
}

export type ExpectancyActions = IExpectancyGetAllAction;
export const getAllCharacters: ActionCreator<
  ThunkAction<Promise<any>, IExpectancyState, null, IExpectancyGetAllAction>
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get('https://wfp.wayapay.co/data/');
      dispatch({
        data: response.data.results,
        type: ExpectancyActionTypes.GET_ALL,
      });
    } catch (err) {
      console.error(err);
    }
  };
};
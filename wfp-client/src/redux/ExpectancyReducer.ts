import { Reducer } from "redux";
import {
    ExpectancyActionTypes,
    ExpectancyActions
} from './ExpectancyActions';
import LifeExpectancyModel from "../models/model";


export interface IExpectancyState {
    readonly data: LifeExpectancyModel[];
}

const initialExpectancyState: IExpectancyState = {
    data: [],
};

export const characterReducer: Reducer<IExpectancyState, ExpectancyActions> = (
  state = initialExpectancyState,
  action
) => {
  switch (action.type) {
    case ExpectancyActionTypes.GET_ALL: {
      return {
        ...state,
        data: action.data,
      };
    }
    default:
      return state;
  }
};
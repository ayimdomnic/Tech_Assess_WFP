import LifeExpectancyModel from "../models/model";
import Data from './data/data';
import ApiService from "./api";
import axios from 'axios';

const ENABLE_RANDOM_ERRORS = false;

export default class DataService {

    static fetchData()  {
        return axios.get("http://localhost:8000/data").then((data) => {
            return data;
        });
    }
}
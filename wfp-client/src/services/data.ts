import LifeExpectancyModel from "../models/model";
import Data from './data/data';

const ENABLE_RANDOM_ERRORS = false;

export default class DataService {
    static getAll(): Promise<LifeExpectancyModel[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (ENABLE_RANDOM_ERRORS && Math.random() > 0.5) {
                    reject(new Error('Error'));
                } else {
                    resolve(Data)
                }
            }, 1500)
        });
    }
}
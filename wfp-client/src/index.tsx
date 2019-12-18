import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";
import { Store } from "redux";
import configureStore, { IAppState} from "./redux/Store";
import { getAllCharacters } from "./redux/ExpectancyActions";
import './index.css';
import AppRouter from "./Router";
import * as serviceWorker from './serviceWorker';

interface Iprops {
    store: Store<IAppState>
}


const Root: React.FC<Iprops> = props => {
    return (
         <Provider store={props.store}>
            <AppRouter />
        </Provider>
    )
};

const store = configureStore();
store.dispatch(getAllCharacters());

ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root') as HTMLElement
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

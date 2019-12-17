import React from 'react';
import  ReactDom  from 'react-dom';
import { createStore, applyMiddleware} from "redux";
import { mainReducer, defaultState } from "./store/reducer";
import thunk from "redux-thunk";
import './App.css';

const store = createStore(mainReducer, defaultState(), applyMiddleware(thunk));

const App: React.FC = () => {
  return (

     <header className="wfp-header-init fixed">
        <div className="wfp--grid wfp--wrapper">
            <div className="wfp-u-3 wfp-u-md-1-3 header--container">
                <h3 className="header-title">Life Expectancy</h3>
            </div>
        </div>
     </header>

  );
}

export default App;

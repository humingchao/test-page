import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'mobx'; // 开启严格模式
import { Provider } from 'mobx-react';
import stores from '@/stores';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

configure({enforceActions: 'never'}) // 开启严格模式

ReactDOM.render(
    <Provider {...stores}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

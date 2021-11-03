import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from './context/context'
import { SpeechProvider } from '@speechly/react-client';
ReactDOM.render(
    <SpeechProvider appId="2fb38914-3b04-4f56-982a-3418dd64101a" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById('root'),
);

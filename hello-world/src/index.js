import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function Greeting(props) {
	return <h1>Hello, {props.name}!</h1>;    //（2）
}

const element = <Greeting name="Tom"/>;    //（1）

ReactDOM.render(
	element,
	document.getElementById('root')
);
registerServiceWorker();

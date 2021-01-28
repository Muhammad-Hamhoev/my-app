
// Я просто физически не успел за эти 2 дня за последний час просмотра урока все что я успел вот это но я все понял

import React from 'react';
import ReactDOM from 'react-dom';

import HeaderBlock from './components/HeaderBlock'

import './index.css';

const AppList = () => {
	const items = ['First', 'Second'];
	return (
		<ul>
			<li>{items[0]}</li>
			<li>{items[1]}</li>
		</ul>
	);
}

const AppHeader = () => {
	return (
		<h1>Hello React</h1>
	);
}

const App = () =>{
	return(
		<>
			<HeaderBlock />
			<AppHeader />
			<AppList />
			<AppHeader />
			<AppList />
		</>
	);
}

const el = <App />

ReactDOM.render(el, document.getElementById('root'));
import React from 'react';
import './App.css';
// import About from './components/About';
import Header from './components/Header';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
function App() {
	const [mode, setMode] = useState('light');
	const toggle = () => {
		if (mode === 'light') {
			setMode('dark');
			document.body.style.backgroundColor = 'rgb(2 2 48)';
		}
		else {
			setMode('light');
			document.body.style.backgroundColor = 'white';
		}
	}
	return (
		<>
			<Header mode={mode} toggle={toggle} />
			{/* <Alert alert={"yehhee we did it"} /> */}
			<div className='container'>
				<TextForm mode={mode} toggle={toggle} />
				{/* <About /> */}
			</div>
		</>
	);
}

export default App;

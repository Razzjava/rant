import React from 'react';
import './App.css';
import Input from './components/Input'
import Message from './components/Message'
import Header from './components/Header'

function App() {
  return (
	<div className='main-app'>
	<Header />
    <main>
      <Input />
    </main>
	</div>
  );
}

export default App;
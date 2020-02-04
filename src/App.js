import React from 'react';
import './App.css';
import Home from './components/home/Home';
import Landing from './components/landing/landing';

function App() {
  return (
    <div className="App">
      <section>
        <Landing />
        {/* <Home/> */}
      </section>
    </div>
  );
}

export default App;

import React from 'react';
import './style.css';
import Test from './comp/Test';

export default function App() {
  function Showalert(text) {
    alert(text);
    console.log('12');
  }
  return (
    <div>
      <h1>Study React</h1>
      <Test />
      <p>Start editing to see some magic happen :)</p>
      <button onClick={() => Showalert('1234')}>Click me</button>
      <button>SuperMagic</button>
    </div>
  );
}

import React from 'react';
import './style.css';

export default function App() {
  function Showalert(text) {
    alert(text);
    console.log('12');
  }
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={() => Showalert('1234')}>Click me</button>
    </div>
  );
}

import React from 'react';
import './style.css';
import Test from './comp/Test';
import Task1 from './comp/Task1';
import Task3 from './comp/Task3';

export default function App() {
  function Showalert(text) {
    alert(text);
    console.log('12');
  }
  return (
    <div>
      <Task3 />
    </div>
  );
}

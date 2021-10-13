import React from 'react';
import './style.css';
import Test from './comp/Test';
import Task1 from './comp/Task1';

export default function App() {
  function Showalert(text) {
    alert(text);
    console.log('12');
  }
  return <Task1 p1={88} />;
}

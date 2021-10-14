import React from 'react';
import './style.css';
import Test from './comp/Test';

export default function App() {
  function Showalert(text) {
    alert(text);
    console.log('12');
  }
  const h1 = React.createElement('h1', {}, 'unit_08');
  const h2 = React.createElement('h2', { className: 'text-orange' }, 'header2');
  const h3 = React.createElement('p', { style: { color: 'red' } }, 'header3');
  const inpt = React.createElement('input', {"type": "text", "value":55});
  const p1 = React.createElement('p', {}, 'Hello');
  const p2 = React.createElement('p', {}, 'World');
  const div = React.createElement("div", {"className" : "text-gray"}, p1, p2)
  return (
    <>
      {h1}
      {h2}
      {h3}
      {inpt}
      {div}
    </>
  );
}

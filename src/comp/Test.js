import React from 'react';

function TestOutput() {
  let out = document.querySelector('.out');
  out.textContent = 'test';
}
function Test() {
  return (
    <>
      <button onClick={TestOutput}>TestButton</button>
    </>
  );
}

export default Test;

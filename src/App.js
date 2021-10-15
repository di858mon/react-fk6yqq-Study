import React from 'react';
import './style.css';
import Test from './comp/Test';
import PlaceHolderHook from './comp/PlaceholderPostHook';
import ChooseList from "./comp/ChooseList"

export default function App() {
  function Showalert(text) {
    alert(text);
    console.log('12');
  }
  return (
    <>
      <ChooseList/>
      <hr/>
    </>
  );
}

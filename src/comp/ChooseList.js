import React, { useState, useEffect } from 'react';
import Comment from './Comment';

export default function ChooseList() {
  const [data, setData] = useState([]);

  const changeText = (event) => {
    //console.log(event.target.value);
    const id = event.target.value;
    fetch('https://jsonplaceholder.typicode.com/posts/' + id + '/comments')
      .then((Response) => Response.json())
      .then((dat) => {
        setData(dat);
        console.log(dat);
      });
  };

    return (
    <>
      <select onChange={changeText}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <hr />
{data.map(item=>(
  <Comment props={item} />
))}
    </>
  );
}

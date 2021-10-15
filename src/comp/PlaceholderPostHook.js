import React, { useState, useEffect } from 'react';

export default function PlaceHolderHook() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1/posts')
      .then((Response) => Response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  const changeText = (event) => {
    //console.log(event.target.value);
    const id = event.target.value;
    fetch('https://jsonplaceholder.typicode.com/posts/'+id+'/comments')
      .then((Response) => Response.json())
      .then((data) => {
        setData(data);
        console.log(data);
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
      {data.map((item) => (
        <div key={item.id}>
          <h2>
            {item.id}. {item.title}
          </h2>
          <p>{item.body}</p>
        </div>
      ))}
    </>
  );
}

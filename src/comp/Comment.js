import React, { useState, useEffect } from 'react';

export default function Comment(props) {
  console.log(props);
  return (
    <div key={props.props.id}>
      <h2>{props.props.email}</h2>
      <p>{props.props.body}</p>
    </div>
  );
}

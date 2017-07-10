import React from 'react';
import ReactDOM from 'react-dom';

function Root () {
    return <div>Hello React!!!!</div>
}

ReactDOM.render(
  <Root />,
  document.getElementById('container')
);
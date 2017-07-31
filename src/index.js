import React from 'react';
import ReactDOM from 'react-dom';
import ParentComponent from './components/ParentComponent';

console.log('is this being read?');

ReactDOM.render(
  <ParentComponent />,
  document.getElementById('parent-component-react')
);

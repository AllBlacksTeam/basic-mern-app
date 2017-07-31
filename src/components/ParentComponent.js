import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  return (
    <div>
      <h3>This comes from the Parent Component</h3>
      <ChildComponent city="New York" />
    </div>
  );
};

export default ParentComponent;

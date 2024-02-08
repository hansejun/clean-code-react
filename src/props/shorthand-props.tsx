import React from 'react';

// shorthand props

const ShorthandProps = props => {
  return (
    <div>
      <ChildComponent {...props} />
    </div>
  );
};

export default ShorthandProps;

const ChildComponent = () => {
  return <div>ChildComponent</div>;
};

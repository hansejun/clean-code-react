import React from 'react';

/*
    1. class -> className
    2. 컴포넌트는 PascalCase
    3. props는 camelCase. 단, 컴포넌트를 Props로 전달할 경우에는 PascalCase
  

*/

const PropsNaming = () => {
  return (
    <>
      <ChildComponent />
    </>
  );
};

export default PropsNaming;

const ChildComponent = () => {
  return <div>ChildComponent</div>;
};

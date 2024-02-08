import React, { useState } from 'react';

// 블필요한 props 복사

const CopyProps = ({ value }) => {
  //  ❌
  const [copyValue] = useState(value);
  return <div>CopyProps</div>;
};

export default CopyProps;

import React, { useEffect, useState } from 'react';
// 잘못된 초기화
const InitState = () => {
  const [arr, setArr] = useState<number[]>();

  useEffect(() => {
    setArr([1, 2, 3]);
  }, []);

  return (
    <>
      {arr.map(item => (
        <div>{item}</div>
      ))}
    </>
  );
};

export default InitState;

import React, { useEffect, useState } from 'react';

// useEffect 사용할 필요없이 그냥 필터된 변수 만들어서 사용하면 된다.
// 렌더링 될때마다 값은 생성되지만, 굳이 상태로 만들 필요는 없다.
const UnnecessaryTest01 = () => {
  const [arr, setArr] = useState([1, 2, 3]);

  useEffect(() => {
    const filteredArr = arr.filter(item => item > 1);
    setArr(filteredArr);
  }, []);

  return (
    <div>
      {arr.map(item => (
        <span>{item}</span>
      ))}
    </div>
  );
};

export default UnnecessaryTest01;

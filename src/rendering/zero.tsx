import React, { useState } from 'react';

const Zero = () => {
  const [items, setItems] = useState([]);
  // ❌ JSX에서 0은 유효한 값이다. 0이 렌더링된다.
  //   return <div>{items.length && items.map(item => <div key={item} />)}</div>;

  // ✅ booelan을 사용하여 렌더링을 제어한다.
  return <div>{items.length > 0 && items.map(item => <div key={item} />)}</div>;
};

export default Zero;

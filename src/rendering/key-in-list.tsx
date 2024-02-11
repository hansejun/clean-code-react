import React, { useState } from 'react';

const KeyInList = () => {
  const [list, setList] = useState([1, 2, 3, 4, 5]);

  /*
    ❌ key를 지정해야한다.
    - 고유의 key가 존재하지 않으면 렌더링된 요소를 추적할 수 없다.
    - index를 key로 사용하는건 버그 발생의 원인이 될 수 있다.
    - Prefix 식별자를 사용하는 것은 best practice가 아니다. 
    - new Date는 최악의 방식이다. 렌더링될 때마다 고유의 값을 계속해서 찍어내게 된다. 
    - uuid 또한 좋지 못한 방식이다. 렌더링될 때마다 고유의 값을 계속해서 찍어내게 된다.
  */
  return (
    <ul>
      {list.map((item, index) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};

export default KeyInList;

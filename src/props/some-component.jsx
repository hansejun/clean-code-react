/*
    객체 Props 지양하기
    - 변하지 않는 값일 경우 컴포넌트 외부로 드러내기
    - 필요한 값만 객체를 분해해서 props로 전달하기
    - 정말 무거운 값 혹은 연산을 할 경우에만 useMemo / useCallback을 사용하기
*/

import { useState } from 'react';

const SomeComponent = () => {
  const [propArr] = useState([1, 2, 3]);

  // 객체를 props로 전달하는 것은 지양해야 한다.
  // 렌더링이 발생할 때마다 새로운 객체가 생성되기 때문이다.
  // 이는 불필요한 렌더링을 유발할 수 있다.
  // return <ChildComponent propObj={{ hello: 'world' }} />;

  return <ChildComponent hello="world" itme={propArr.at(0)} />;
};

export default SomeComponent;

const ChildComponent = props => {
  return <div {...props}>ChildComponent</div>;
};

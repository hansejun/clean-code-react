// 과거에는 필수였으나 v17부터는 불필요하다.
/**
 * 이전에는 리액트에서 사용되는 JSX 문법을 컴파일링하기 위해서는 React.createElement() 함수를 사용해야 했다.
 * 그래서 React를 import 해야 했지만, v17부터는 더 이상 필요하지 않다.
 * 이제는 jsx-runtime을 통해서 _jsx('h1',{children:'hello world'})와 같이 컴파일을 자동적으로 수행한다.
 *
 * 실제로 성능개선 효과가 조금은 있다. 불필요한 모듈을 불러오지 않기 때문에.
 */
import React from 'react';

const ImportReact = () => {
  return <div>ImportReact</div>;
};

export default ImportReact;

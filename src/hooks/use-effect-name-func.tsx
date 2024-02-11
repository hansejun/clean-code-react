import React, { useEffect } from 'react';

/**
 * useEffect() 기명함수와 함께 사용하기
 */

const useEffectNameFunction = () => {
  // 기명함수를 통해 useEffect가 어떤 역할을 하는지 알 수 있다.
  // 또한 useEffect안에서 에러가 발생하였을 때 함수의 이름이 콜스택에 표시가 되어 디버깅에 수월하다. (직관적으로 확인 가능하다.)

  useEffect(function isInViewSomeComponent() {
    if (isInView(someRef.currnt)) {
      // some logic
    }
  }, []);

  return <div>useEffectNameFunction</div>;
};

export default useEffectNameFunction;

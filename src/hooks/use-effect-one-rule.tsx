import React, { useEffect } from 'react';
import { redirect } from 'react-router-dom';

// 하나의 역할만 수행하는 무언가를 만들자 => 함수, 컴포넌트, 훅 등

/**
 * useEffect()
 * 한가지의 역할만 하는지 확인
 *
 * 방법?
 * - 기명 함수를 적용
 * - 의존성 배열에 여러 의존성이 있는지 확인
 * -
 */
const UseEffectOneRule = ({ token, newPath }) => {
  // ❌ 여러 역할을 수행한다. 분리해야한다.
  useEffect(() => {
    // token과 관련이 없다.
    redirect(newPath);

    // newPath와 관련이 없다.
    const userInfo = setLogin(token);
  }, [token, newPath]);

  // ❌ 포기하고 분리해야한다.
  useEffect(() => {
    if (prevPath !== newPath) {
      redirect(newPath);
    }

    if (prevToken !== token) {
      setLogin(token);
    }
  }, [token, newPath]);

  // ✅ 한가지 역할만 수행한다. useEffect의 역할이 명확해진다.
  // 만약 두 의존성이 서로 연관되어 있다면 연결해주는 역할의 함수를 만들어주는 등의 방법을 사용한다.
  useEffect(() => {
    redirect(newPath);
  }, [newPath]);

  useEffect(() => {
    setLogin(token);

    if (options) {
      // 부가적인 로직 <= 추가 동작해도 이상이 없고 부작용 생길 일이 없는 로직만 추가.
    }
  }, [token, options]);

  return <div>UseEffectOneRule</div>;
};

export default UseEffectOneRule;

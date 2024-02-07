import React, { useEffect, useRef, useState } from 'react';

// // 리렌더링 방지가 필요하다면 useState 대신 useRef를 사용한다.

// const RefInsteadOfState = () => {
//   const [isMount, setIsMount] = useState(false);

//   useEffect(() => {
//     if (!isMount) {
//       setIsMount(true);
//     }
//   }, [isMount]);

//   return <div>{isMount && '컴포넌트 마운트 완료'}</div>;
// };

// export default RefInsteadOfState;

// 리렌더링 방지가 필요하다면 useState 대신 useRef를 사용한다.

// useState대신 UseRef를 사용하면 컴포넌트의 생명주기와 동일한 리렌더링 되지 않는 상태를 만들 수 있다.
const RefInsteadOfState = () => {
  const isMount = useRef(false);

  useEffect(() => {
    isMount.current = true;

    return () => {
      isMount.current = false;
    };
  }, []);

  return <div>{isMount && '컴포넌트 마운트 완료'}</div>;
};

export default RefInsteadOfState;

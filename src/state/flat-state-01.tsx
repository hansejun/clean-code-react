// 연관된 상태 단순화

import React, { useEffect, useState } from 'react';

// const FlatState = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);
//   const [isFinish, setIsFinish] = useState(false);

//   const fetchData = () => {
//     setIsLoading(true);
//     setIsError(false);
//     setIsFinish(false);
//     try {
//       // fetch data
//       setIsFinish(true);
//     } catch (error) {
//       setIsError(true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   if (isLoading) return <LoadingComponent />;
//   if (isError) return <ErrorComponent />;
//   if (isFinish) return <SuccessComponent />;

//   return <div>FlatState</div>;
// };

/**
 * 세 가지 상태를 객체로 관리하여 리듀서를 작성할 수도 있지만 단순한 상태를 나타낼 경우에는
 * 아래와 같이 문자열을 통해 관리할 수 있다.
 *
 */

const PROMISE_STATE = {
  INIT: 'init',
  LOADING: 'loading',
  ERROR: 'error',
  FINISH: 'finish',
};

const FlatState = () => {
  const [promiseState, setPromiseState] = useState(PROMISE_STATE.INIT);

  const fetchData = () => {
    setPromiseState(PROMISE_STATE.LOADING);
    try {
      // fetch data
      setPromiseState(PROMISE_STATE.FINISH);
    } catch (error) {
      setPromiseState(PROMISE_STATE.ERROR);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (promiseState === PROMISE_STATE.LOADING) return <LoadingComponent />;
  if (promiseState === PROMISE_STATE.ERROR) return <ErrorComponent />;
  if (promiseState === PROMISE_STATE.FINISH) return <SuccessComponent />;
};

export default FlatState;

const LoadingComponent = () => {
  return <div>LoadingComponent</div>;
};

const ErrorComponent = () => {
  return <div>ErrorComponent</div>;
};

const SuccessComponent = () => {
  return <div>SuccessComponent</div>;
};

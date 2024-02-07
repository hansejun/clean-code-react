import React, { useEffect, useState } from 'react';

// 모두 상태라고 가정한다.
const hasToken = false;
const hasCookie = false;
const isValidCookie = false;
const isNewUser = false;
const isValidToken = false;

/*
    플래그 값이란?
    - 프로그래밍에서 주로 특정 조건 혹은 제어를 위한 조건을 불리언으로 나타내는 값

    여기서 사용하는 isLogin은 굳이 상태로 관리할 필요가 없다.
*/

const FlagState = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (hasToken) {
      setIsLogin(true);
    }
    if (hasCookie) {
      setIsLogin(true);
    }
    if (isValidCookie) {
      setIsLogin(true);
    }
    if (isNewUser === false) {
      setIsLogin(true);
    }
    if (isValidToken) {
      setIsLogin(true);
    }
  }, [hasToken, hasCookie, isValidCookie]);

  return <div>FlagState</div>;
};

export default FlagState;

// useEffect(() => {
//   if (
//     hasToken &&
//     hasCookie &&
//     isValidCookie &&
//     isNewUser === false &&
//     isValidToken
//   ) {
//     setIsLogin(true);
//   }
// }, [hasToken, hasCookie, isValidCookie, isNewUser, isValidToken]);

// useEffect(() => {
//   const isLogin =
//     hasToken &&
//     hasCookie &&
//     isValidCookie &&
//     isNewUser === false &&
//     isValidToken;

//   if (isLogin) {
//     setIsLogin(true);
//   }
// }, [hasToken, hasCookie, isValidCookie, isNewUser, isValidToken]);

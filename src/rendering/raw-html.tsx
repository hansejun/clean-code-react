import React from 'react';

/*
    안전하게 raw HTML 다루기

    1. 렌더링될 데이터
    2. 유저가 다시 한번 입력모드로 수정할 수 있는 데이터 (댓글 등) - Input, textarea 
    3. DOMpurify와 같은 라이브러리를 사용해서 HTML을 정제한다.
    4. eslint-plugin-risxss를 통해 경고를 보여줄 수 있다.
*/

const SERVER_DATA = '<div>Server Data</div>';

const RawHTML = () => {
  // 🧐
  // const markup = { __html: SERVER_DATA };

  // ✅ DOMPurify를 사용하여 HTML을 정제한다. 더 안전하게 사용 가능하다.
  const sanitizeContent = { __html: DOMPurifyl.sanitize(SERVER_DATA) };

  // ❌ 최악의 방법 (XSS 공격에 취약하다)
  return <div>{SERVER_DATA}</div>;

  // 🧐 그나마 나은 방법
  return <div dangerouslySetInnerHTML={markup} />;
};

export default RawHTML;

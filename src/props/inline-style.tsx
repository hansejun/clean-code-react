import React from 'react';

const InlineStyle = () => {
  // ❌ inline css를 사용해서 스타일을 적용하는 것은 지양
  // 객체를 넣었기 때문에 렌더링 될 때마다 비교를 하게 되어 성능에 영향을 줄 수 있음
  // 차라리 객체를 외부에 위치 시켜 사용하는 것이 좋음

  return <div style={{ background: 'red' }}>InlineStyle</div>;
};

export default InlineStyle;

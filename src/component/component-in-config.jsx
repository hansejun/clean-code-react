// 취향 따라
/*
    1. 변하지 않는 상수는 외부로 분리.
    2. 플래그성 상태나 ref는 상단 / 그 밑으로 서드파티 라이브러리 등 hooks / 그 밑으로 state와 같이 팀에서 정해서 관리
    3. 계산하는 함수나 리액트와 관련 없는 함수는 분리 
    4. Early return을 사용하여 가독성을 높인다.
    5. useEffect는 최소한으로 최하단에 위치
    6. styled-components는 분리해서 최하단에 위치
*/

const ComponentInConfig = () => {
  return <div>ComponentInConfig</div>;
};

export default ComponentInConfig;

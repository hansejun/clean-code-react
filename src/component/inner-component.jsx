/*
    컴포넌트 내부에 컴포넌트 선언

    1. 결합도가 증가한다.
    - 구조적으로 스코프적으로 종속된 개발이 된다.
    - 나중에 확장성이 생겨서 분리될 때 굉장히 힘들어진다.
    
    2. 성능 저하
    - 상위 컴포넌트 리렌더 -> 하위 컴포넌트 재생성
    - 밖으로 빼는 것만으로도 문제 해결 

*/

const OuterComponent = () => {
  const InnerComponent = () => {};

  return (
    <div>
      <InnerComponent />
    </div>
  );
};

export default OuterComponent;

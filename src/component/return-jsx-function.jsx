/*
   JSX 컴포넌트 함수로 반환하는 경우
   일반적인 리액트 생태계에서는 문제가 발생할 수 있다. 

   1. scope 문제
   2. 명시적이지 못함.
*/
const ReturnJSXFunction = () => {
  const TopRender = () => {
    return <div>TopRender</div>;
  };

  const renderMain = () => {
    return <main>renderMain</main>;
  };

  return (
    <div>
      {TopRender()}
      {renderMain()}
    </div>
  );
};

export default ReturnJSXFunction;

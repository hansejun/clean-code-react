/*
   JSX 컴포넌트 함수로 반환하는 경우
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

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

/*
    ...props 주의할 점
    - 코드를 예측하기 어렵다. props가 어디서 오는지 알기 어렵다.
*/

// 🥲 사용하지 않는 Props를 전달받으면 렌더링 문제가 발생할 수 있다.
// const ParentComponent = props => {
//   return <ChildOrHOCComponent {...props} />;
// };

const ParentComponent = props => {
  // 필요 있는 Props을 분리하는데 발생하는 비용도 있다.
  // 일반적인 경우에는 필요 없는 Props를 전달받지 않도록 하는 것이 좋다.
  const { 관련_없는_props, 관련_있는_props, ...나머지_props } = props;

  return (
    <ChildOrHOCComponent 관련_있는_props={관련_있는_props} {...나머지_props} />
  );
};

export default ParentComponent;

const ChildOrHOCComponent = props => {
  return <div {...props}>ChildComponent</div>;
};

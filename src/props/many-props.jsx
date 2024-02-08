/*
    너무 많은 Props를 넘기는 경우
    - Tanstack Query, Form Library, 상태 관리자, Context API, Composition 등
*/

// const ManyProps = () => {
//   // ❌ 너무 많은 Props를 넘기는 경우
//   return (
//     <ChildComponent
//       user="유저 객체"
//       auth="auth 객체"
//       location="위치 정보"
//       favorite={'좋아요 정보'}
//       handleSubmit={() => {}}
//       handleChange={() => {}}
//       handleCancel={() => {}}
//     />
//   );
// };

const ManyProps = () => {
  // 1. one depth 분리
  // 2. 확장성을 위한 분리를 위해 도메인 로직을 다른 곳으로 모아둔다. ex) <UserForm/> => <CheckBoxForm/>
  // 3. Props 또한 확장성 높은 네이밍을 사용한다. ex) user => formData
  return (
    <div>
      <ChildComponent user="유저 객체" handleSubmit={() => {}} />
      <ChildComponent auth="auth 객체" handleChange={() => {}} />
    </div>
  );
};

export default ManyProps;

const ChildComponent = props => {
  return <div {...props}>ChildComponent</div>;
};

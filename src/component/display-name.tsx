import React, { forwardRef } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

/*
    dev-tool을 이용하여 디버깅할 때 displayName을 이용하여 컴포넌트의 이름을 확인할 수 있다.
    주로 forwardRef나 memo를 사용할 때 사용한다. 혹은 익명함수를 사용할 때 사용한다. 

*/

// Case 1
export const InputText = forwardRef((props, ref) => {
  return <input type="text" ref={ref} />;
});

InputText.displayName = 'InputText';

// Case 2
export const withRouter = Component => {
  const WithRouter = props => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return (
      <Component
        {...props}
        location={location}
        navigate={navigate}
        params={params}
      />
    );
  };
  // HOC 사용시에 명시적으로 컴포넌트 이름을 신경쓸 수 있다.
  WithRouter.displayName =
    Component.displayName ?? Component.name ?? 'WithRouterComponent';

  return WithRouter;
};

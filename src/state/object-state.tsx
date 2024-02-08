import React, { useEffect, useState } from 'react';

// 연관된 상태 객체로 묶어내기

const ObjectState = () => {
  const [fetchState, setFetchState] = useState({
    isLoading: false,
    isError: false,
    isFinish: false,
  });

  const fetchData = () => {
    setFetchState(prev => ({ ...prev, isLoading: true }));
    try {
      // fetch data
      setFetchState(prev => ({ ...prev, isFinish: true, isLoading: false }));
    } catch (error) {
      setFetchState(prev => ({
        ...prev,
        isError: true,
        isLoading: false,
      }));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (fetchState.isLoading) return <LoadingComponent />;
  if (fetchState.isError) return <ErrorComponent />;
  if (fetchState.isFinish) return <SuccessComponent />;

  return <div>FlatState</div>;
};

export default ObjectState;

const LoadingComponent = () => {
  return <div>LoadingComponent</div>;
};

const ErrorComponent = () => {
  return <div>ErrorComponent</div>;
};

const SuccessComponent = () => {
  return <div>SuccessComponent</div>;
};

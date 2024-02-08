import React, { useEffect, useReducer, useState } from 'react';

const INIT_STATE = {
  isLoading: false,
  isError: false,
  isSuccess: false,
};

const reducer = (_, action) => {
  switch (action.type) {
    case 'FETCH_LOADING':
      return { isError: false, isSuccess: false, isLoading: true };
    case 'FETCH_ERROR':
      return { isError: true, isSuccess: false, isLoading: false };
    case 'FETCH_SUCCESS':
      return { isError: false, isSuccess: true, isLoading: false };
    default:
      return INIT_STATE;
  }
};

const StateToReducer = () => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const fetchData = () => {
    dispatch({ type: 'FETCH_LOADING' });
    try {
      // fetch data
      dispatch({ type: 'FETCH_SUCCESS' });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR' });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (state.isLoading) return <div>loading</div>;
  if (state.isError) return <div>error</div>;
  if (state.isSuccess) return <div>success</div>;

  return <div>FlatState</div>;
};

export default StateToReducer;

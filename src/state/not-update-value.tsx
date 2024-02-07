import React, { useState } from 'react';

const NotUpdateValue = () => {
  // 상수를 다루거나 아니면 일반적인 방치
  // 업데이트 되지 않는 일반적인 객체

  // 리액트 상태로 바꾸거나 외부로 위치를 옮긴다. -> 상태로 가지고 있는건 좋지는 않다.
  const INFO = {
    name: 'kim',
    value: 'chacha',
  };

  const [count, setCount] = useState(0);

  const onIncrement = () => setCount(prev => prev + 1);
  const onDecrement = () => setCount(prev => prev - 1);

  return (
    <div>
      <h1>{INFO.name}</h1>
      <FakeComponent info={INFO} />
      <Buttons onIncrement={onIncrement} onDecrement={onDecrement} />
    </div>
  );
};

export default NotUpdateValue;

const FakeComponent = ({ info }: { info: { name: string; value: string } }) => {
  return (
    <div>
      {info.name}
      {info.value}
    </div>
  );
};

const Buttons = ({
  onIncrement,
  onDecrement,
}: {
  onIncrement: () => void;
  onDecrement: () => void;
}) => {
  return (
    <div>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
};

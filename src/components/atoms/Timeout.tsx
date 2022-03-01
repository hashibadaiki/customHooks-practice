import React from 'react';
import { useTimeout } from '../../hooks/Timeout';

export const Timeout = () => {
  const [seconds, setSeconds] = React.useState(0);
  useTimeout(() => {
    setSeconds(seconds + 2);
  }, 5000);

  return (
    <div>
      <div>5秒後に +2 される</div>
      <div>{seconds}</div>
    </div>
  );
};

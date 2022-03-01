import React from 'react';
import { useTimeout } from '../../hooks/Timeout';

const test = 'test';

export const Atom = () => {
  const [seconds, setSeconds] = React.useState(0);
  useTimeout(() => {
    setSeconds(seconds + 2);
  }, 5000);

  return (
    <div>
      <div>Atom</div>
      <div>{test}</div>
      <div>{seconds}</div>
    </div>
  );
};

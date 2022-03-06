import React from 'react';

// valueを受け取って、その値を保持して返す

// typeは何が正しいか考え中
export const usePrevious = (value: any) => {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

import React from 'react';

// valueを受け取って、その値を保持して返す
// 解説記事↓
// https://qiita.com/seya/items/6bbfa3f9d489809ccb2c

// typeは何が正しいか考え中
export const usePrevious = (value: any) => {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

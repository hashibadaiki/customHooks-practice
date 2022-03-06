import React, { RefObject } from 'react';
import { useClickInside } from '../../hooks/ClickInside';

export const ClickInside = ({ onClickInside }: any) => {
  const clickRef = React.useRef(null);
  useClickInside(clickRef, onClickInside);

  // 内側のコンポーネントを参照しつつ関数を発火させている
  // 具体的なユースケースは掴めていない

  return (
    <div>
      <h2>ClickInside</h2>
      <div>
        <p>click!!</p>
        <p ref={clickRef}>click!!</p>
      </div>
    </div>
  );
};

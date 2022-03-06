import React from 'react';
import { useClickInside } from '../../hooks/ClickInside';

export const ClickInside = ({ onClickInside }: any) => {
  const clickRef = React.useRef(null);
  useClickInside(clickRef, onClickInside);

  // 内側のコンポーネントを参照しつつ関数を発火させている
  // 内側の要素全てで発火
  // 具体的なユースケースは掴めていない

  const test = () => {
    console.log('test');
  };

  return (
    <div style={{ backgroundColor: 'yellow' }}>
      <h2>ClickInside</h2>
      {/* grayをclickすると反応する */}
      <div ref={clickRef} style={{ backgroundColor: 'gray' }}>
        <p>click!!</p>
        <p onClick={test}>test</p>
      </div>
    </div>
  );
};

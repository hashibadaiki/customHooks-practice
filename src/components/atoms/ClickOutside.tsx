import React from 'react';
import { useClickOutside } from '../../hooks/ClickOutside';

export const ClickOutside = ({ onClickOutside }: any) => {
  const clickRef = React.useRef(null);
  useClickOutside(clickRef, onClickOutside);
  const test = () => {
    console.log('test');
  };

  return (
    <div style={{ backgroundColor: 'red' }}>
      <h2>ClickOutside</h2>
      {/* gray以外の場所をclickすると反応する */}
      <div ref={clickRef} style={{ backgroundColor: 'gray' }}>
        <p>click!!</p>
        <p onClick={test}>test</p>
      </div>
    </div>
  );
};

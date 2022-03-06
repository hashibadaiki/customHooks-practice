import React from 'react';
import { useClickInside } from '../../hooks/ClickInside';

export const ClickOutside = ({ onClickOutside }: any) => {
  const clickRef = React.useRef(null);
  useClickInside(clickRef, onClickOutside);
  const test = () => {
    console.log('test');
  };

  return (
    <div>
      <h2>ClickOutside</h2>
      <div ref={clickRef}>
        <p>click!!</p>
        <p onClick={test}>noFire</p>
      </div>
    </div>
  );
};

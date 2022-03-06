import React from 'react';
// これとClick Insideの違いがいまいち不明

export const InsideTest = () => {
  const wrapTest = () => {
    console.log('wrapTest');
  };
  const test = () => {
    console.log('test');
  };

  return (
    <div style={{ backgroundColor: 'pink' }}>
      <h2>InsideTest</h2>
      <div onClick={wrapTest}>
        <p>click!!</p>
        <p onClick={test}>test</p>
      </div>
    </div>
  );
};

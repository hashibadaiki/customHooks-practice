import React from 'react';

export const useClickOutside = (ref: any, callback: any) => {
  console.log('outside ref', ref);
  const handleClick = (e: any) => {
    // https://developer.mozilla.org/ja/docs/Web/API/Node/contains
    // containsは引数の要素が含まれるかどうか？
    // insideと違い含まれていないことが条件
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };
  React.useEffect(() => {
    // クリックを監視、実行で渡したcallbackを実行してremove
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

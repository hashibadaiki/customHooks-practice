import React from 'react';

// callback func と 遅延時間を受け取る
// 遅延時間後にcallback を発火させるフック
export const useTimeout = (
  callback: (value: React.SetStateAction<number>) => void,
  delay: number,
) => {
  const savedCallback: any = React.useRef();

  React.useEffect(() => {
    // refにcallbackを保持させる
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    const tick = () => {
      if (savedCallback !== undefined) {
        // callbackが渡っていれば、その中身を実行する
        savedCallback.current();
      }
    };
    if (delay !== null) {
      // setTimeoutの返り値はIDでそれを元に識別してclear処理される
      let id = setTimeout(tick, delay);
      return () => clearTimeout(id);
    }
  }, [delay]);
};

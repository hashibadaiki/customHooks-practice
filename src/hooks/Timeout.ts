import React from 'react';

export const useTimeout = (
  callback: (value: React.SetStateAction<number>) => void,
  delay: number,
) => {
  const savedCallback = React.useRef();

  React.useEffect(() => {
    // @ts-ignore
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    const tick = () => {
      if (savedCallback !== undefined) {
        // @ts-ignore
        savedCallback.current();
      }
    };
    if (delay !== null) {
      let id = setTimeout(tick, delay);
      return () => clearTimeout(id);
    }
  }, [delay]);
};

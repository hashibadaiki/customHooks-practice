import React from 'react';
import { usePrevious } from '../../hooks/Previous';

export const Previous = () => {
  const [value, setValue] = React.useState(0);
  const lastValue = usePrevious(value);

  return (
    <div>
      <h2>Previous</h2>
      <div>
        current:{value}, last:{lastValue}
      </div>
      <button onClick={() => setValue(value + 1)}>+1</button>
    </div>
  );
};

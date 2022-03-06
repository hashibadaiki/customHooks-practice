import React from 'react';
import { Atom } from '../atoms/Atom';
import { ClickInside } from '../atoms/ClickInside';
import { Previous } from '../atoms/Previous';
import { Timeout } from '../atoms/Timeout';

export const Molecule = () => {
  const clickInsideFunc = () => {
    alert('insideClick');
  };
  return (
    <div>
      <div>Molecule</div>
      <Atom />
      <Timeout />
      <Previous />
      <ClickInside onClickInside={clickInsideFunc} />
    </div>
  );
};

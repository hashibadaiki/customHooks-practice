import React from 'react';
import { Atom } from '../atoms/Atom';
import { ClickInside } from '../atoms/ClickInside';
import { ClickOutside } from '../atoms/ClickOutside';
import { Previous } from '../atoms/Previous';
import { Timeout } from '../atoms/Timeout';

export const Molecule = () => {
  const clickFunc = (msg: string) => {
    console.log(msg);
  };
  return (
    <div>
      <div>Molecule</div>
      <Atom />
      <Timeout />
      <Previous />
      <ClickInside
        onClickInside={() => {
          clickFunc('inside');
        }}
      />
      <ClickOutside
        onClickOutside={() => {
          clickFunc('outside');
        }}
      />
    </div>
  );
};

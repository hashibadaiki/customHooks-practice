import React from 'react';
import { Atom } from '../atoms/Atom';
import { Previous } from '../atoms/Previous';
import { Timeout } from '../atoms/Timeout';

export const Molecule = () => {
  return (
    <div>
      <div>Molecule</div>
      <Atom />
      <Timeout />
      <Previous />
    </div>
  );
};

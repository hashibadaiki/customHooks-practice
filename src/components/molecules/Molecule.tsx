import React from 'react';
import { Atom } from '../atoms/Atom';
import { Timeout } from '../atoms/Timeout';

export const Molecule = () => {
  return (
    <div>
      <div>Molecule</div>
      <Atom />
      <Timeout />
    </div>
  );
};

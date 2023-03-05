import React from 'react';
import { forwardRef } from 'react';
import Banner from './Banner';

function ButtonBanner(ref) {
  return (
    <>
      <button ref={ref}>Scroll down</button>
      <Banner ref={ref} />
    </>

  );
};

export default forwardRef(ButtonBanner);

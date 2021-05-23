import React, { FC } from 'react';

import Menu from '../menu';
import Header from '../header';
import MainSlider from '../mainSlider';


const StartWindow: FC = () => {
  return (
    <>
      <Menu />
      <Header />
      <MainSlider />
    </>
  );
};

export default StartWindow;

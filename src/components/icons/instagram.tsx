import React, { FC } from 'react';
import { StaticImage } from "gatsby-plugin-image";
const InstaIcon: FC = () => {
  return (
    <>
      <StaticImage
        src="../../../public/static/images/insta.png"
        alt="brand"

        className="insta__icon"
      />
    </>
  );
};

export default InstaIcon;

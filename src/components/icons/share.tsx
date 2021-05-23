import React, { FC } from 'react';
import { StaticImage } from "gatsby-plugin-image";

const ShareIcon: FC = () => {
  return (
    <>
      <StaticImage
        src="../../../public/static/images/share.png"
        alt="brand"
        className="share__icon"
      />
    </>
  );
};

export default ShareIcon;

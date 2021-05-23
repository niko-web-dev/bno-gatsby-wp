import React, { FC } from 'react';
import { StaticImage } from "gatsby-plugin-image";

const CartIcon: FC = () => {
  return (
    <div className="header__card">
      <StaticImage src="../../../public/static/images/shopping-cart.png" alt="brand" />
    </div>
  );
};

export default CartIcon;

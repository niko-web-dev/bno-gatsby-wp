import React, { FC } from 'react';

import './header.scss';
import MenuBtn from '../menuBtn';
import Logo from '../logo/logo';
import Icons from '../icons';
import SearchIcon from '../icons/searchIcon';
import CartIcon from '../icons/cartIcon';

const Header: FC = () => {

  return (
    <header className="header">
      <div className="container">
        <div className="header__menu">
          <MenuBtn />
          <Logo color="black"/>
          <Icons dir="row">
            <SearchIcon />
            <CartIcon />
          </Icons>
        </div>
      </div>
    </header>
  );
};

export default Header;

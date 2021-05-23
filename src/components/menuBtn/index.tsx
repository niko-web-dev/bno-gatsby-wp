import React, { FC, useContext } from 'react';
import { contextApp } from '../../context/contextApp';

const MenuBtn: FC = () => {
  const [toggleMenu, setToggleMenu] = useContext(contextApp);
  function handleMenu() {
    setToggleMenu((toggleMenu) => !toggleMenu);
  }

  return (
    <>
      <img className="menu_img" src="/static/images/menu.png" alt="menu" onClick={handleMenu} />

      {/*<style jsx>{`*/}
      {/*  .menu_img {*/}
      {/*    cursor: pointer;*/}
      {/*  }*/}
      {/*`}</style>*/}
    </>
  );
};

export default MenuBtn;

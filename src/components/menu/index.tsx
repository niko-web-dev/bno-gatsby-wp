import React, { FC, useContext } from 'react';
import { motion } from 'framer-motion';
import { contextApp } from '../../context/contextApp';
// import Auth from '../auth'

import './menu.scss';
import { Link } from "gatsby"

const animationMenu = {
  visible: { y: '0' },
  hidden: { y: '-100%' },
};

const Menu: FC = () => {
  const [toggleMenu, setToggleMenu] = useContext(contextApp);
  return (
    <>
      <motion.div
        className="menu__wrap"
        initial="hidden"
        animate={toggleMenu ? 'visible' : ''}
        variants={animationMenu}
        transition={{ duration: 0.4 }}
      >
        <div className="menu" onClick={() => setToggleMenu((toggleMenu) => !toggleMenu)}>
          menu menu
          <Link to="#">
            карзина
          </Link>
        </div>
      </motion.div>

      {/*<style jsx>{``}</style>*/}
    </>
  );
};

export default Menu;

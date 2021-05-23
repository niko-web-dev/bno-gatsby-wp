import React, { FC } from 'react';
import {TLogoProps} from "../../types";
import { Link } from "gatsby"

const Logo: FC<TLogoProps> = ({color}) => {
  return (
    <>
      <Link to="/">
          <img className="header__logo" src={color === "black"
              ? "/static/images/logo.png"
              : "/static/images/white-logo.png"}
               alt="logo" />
      </Link>

      {/*<style jsx>{`*/}
      {/*  .logo {*/}
      {/*    width: 100px;*/}
      {/*    height: 100px;*/}
      {/*  }*/}
      {/*`}</style>*/}
    </>
  );
};

export default Logo;

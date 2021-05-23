import React, { FC } from 'react';
import { StaticImage } from "gatsby-plugin-image";

const SearchIcon: FC = () => {
  return (
    <>
      <StaticImage src="../../../public/static/images/search.png"  className="search__icon" alt='icon'/>
    </>
  )
};

export default SearchIcon;

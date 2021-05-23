import React, { FC } from 'react';
import { TProduct } from '../../types';
import './gallery.scss';
import { Link } from "gatsby"

const products: TProduct[] = [
  {
    id: 1,
    article: 'N02A3',
    title: 'EXTENDABLE  HAND GAITER',
    src: '/static/images/gallery/1.png',
    scrBrand: '/static/images/gallery/brand.png',
    price: '14 899',
    favorites: true,
  },
  {
    id: 2,
    article: '453S6',
    title: 'PLATED REFLECTIVE WITH MUSSOLA GOMMATA BLACK',
    src: '/static/images/gallery/2.png',
    scrBrand: '/static/images/gallery/brand.png',
    price: '14 899',
    favorites: true,
  },
  {
    id: 3,
    article: '453S6',
    title: 'PLATED REFLECTIVE WITH MUSSOLA GOMMATA BLACK ',
    src: '/static/images/gallery/3.png',
    scrBrand: '/static/images/gallery/brand.png',
    price: '179 000',
    favorites: true,
  },
];

const GallerySlider: FC = () => {
  return (
    <div className="gallery__slider">
      <div className="container">
        <h2 className="gallery__title">новинки</h2>
        <div className="gallery__inner">
          {products.map((prod) => {
            return (
              <Link key={prod.id} to={`/${prod.article}`}>
                  <div
                    className="gallery__card"
                    style={{
                      backgroundImage: 'url(' + `${prod.src}` + ')',
                    }}
                  >
                    <div className="gallery__card_brandImg">
                      <img src={prod.scrBrand} alt="brand"/>
                    </div>
                    <h3 className="gallery__card_title">
                      <span>{prod.article}</span>
                      {prod.title}
                    </h3>
                    <div className="gallery__card_price">
                      {prod.price}
                      <span>
                        <img
                          src={'/static/images/gallery/r.png'}
                          alt="image"
                        />
                      </span>
                    </div>
                  </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GallerySlider;

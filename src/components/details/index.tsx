import React from 'react';
import "./details.scss"
import { TDetailsCadrs } from '../../types';

const detailsCadrs: TDetailsCadrs[] = [
  {
    img: '/static/images/shield.png',
    title: 'гарантия',
    text: 'ВСЕ ТОВАРЫ НАШЕГО МАГАЗИНА ГАРАНТИРОВАННО ЯВЛЯЮТСЯ ОРИГИНАЛЬНОЙ ПРОДУКЦИЕЙ',
  },
  {
    img: '/static/images/shopping-cart.png',
    title: 'доставка',
    text: 'Ответственно доставляем ваши заказы ПО РОССИИ И СТРАНАМ БЛИЖНЕГО ЗАРУБЕЖЬЯ',
  },
  {
    img: '/static/images/sync.png',
    title: 'возврат',
    text: 'Мы оперативно реагируем на вопросы. Никаких шаблонных ответов и чат-ботов.',
  },
];

const Details = () => {
  return (
      <div className="container">
        <div className="details">
            {detailsCadrs.map((detailsCadr, i) => {
              return (
                  <div
                      key={i} className="details__card">
                    <img className="details__card__icon" src={detailsCadr.img} alt={'shield'} />
                    <h2>{detailsCadr.title}</h2>
                    <p>{detailsCadr.text}</p>
                  </div>
              );
            })}

        </div>
        <div className="details__img">
          <img
              src={'/static/images/details-text.png'}
              alt="brand"
             />
        </div>

    </div>
  );
};

export default Details;

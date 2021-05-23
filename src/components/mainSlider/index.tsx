import React, { FC, useState } from 'react';
import cn from 'classnames';
import { motion } from 'framer-motion';



import  './mainSlider.scss';

import Icons from '../icons';
import InstaIcon from '../icons/instagram';
import ShareIcon from '../icons/share';
import Btn from "../btn/Btn";
import { StaticImage } from "gatsby-plugin-image";
import { pageAnimation } from '../../animation/animation';


const MainSlider: FC = () => {
  const [slide, setSlide] = useState(1);
  const [slideAnim, setSlideAnim] = useState(false);

  const slideCount = 2; // заменить на arr.length??

  function changeSlideCount(side: string) {
    if (side === 'next') {
      if (slide < slideCount) setSlide(slide + 1);
      if (slide === slideCount) setSlide(1);
    }
    if (side === 'prev') {
      if (slide > 1) setSlide(slide - 1);
      if (slide === 1) setSlide(slideCount);
    }
  }

  // const displayNoneAnim = {
  //   show: {
  //     opacity: 1,
  //     display: 'flex',
  //   },
  //   hidden: {
  //     opacity: 0,
  //     display: 'none',
  //   },
  // };
  //
  // const opasityAnim = {
  //   show: {
  //     opacity: 1,
  //   },
  //   hidden: {
  //     opacity: 0,
  //   },
  // };
  //
  // const scaleAnim = {
  //   scale: {
  //     scale: 2.5,
  //   },
  //   norm: {
  //     scale: 1,
  //   },
  // };

  return (
    <div className="mainSlider">
      <div className="container">
        <div className="slider">
          <motion.div
            // transition={{ ease: [0.17, 0.67, 0.53, 0.37] }}
            animate={slide === 1 ? 'show' : 'hidden'}
            variants={pageAnimation.displayNoneAnim}
            className="slide"
          >
            <div className="slide__info">
              <StaticImage
                src="../../../public/static/images/slider/one/brand-logo.png"
                alt="brand"
                width={100}
              />
              <h2>Stone island</h2>

              <p className="slide__text">
                знаменитая на весь мир итальянская дизайн лаборатория, создающая премиум одежду с
                ипользованием хай-тек и милитари технологий с 1982.
              </p>
              <Btn setSlideAnim={setSlideAnim} title='каталог' color='black' link={'products'}/>
            </div>
            <div className="slide__img">
              <div className={slideAnim ? `slide__man slide__man__anim` : "slide__man"}>
                <StaticImage
                  src="../../../public/static/images/slider/one/man.png"
                  alt="man"
                  width={302}
                />
              </div>
              <div
                className={
                  slideAnim
                    ? "slide__text__imgL slide__text__imgL__anim"
                    : "slide__text__imgL"
                }
              >
                <span>stone</span>
              </div>
              <div
                className={
                  slideAnim
                    ? `slide__text__imgR slide__text__imgR__anim`
                    : "slide__text__imgR"
                }
              >
                <span>i sland</span>
              </div>
              <div
                className={slideAnim ? `slide__mash slide__mash__anim` : "slide__mash"}
              >
                <StaticImage
                  src="../../../public/static/images/slider/one/mash-1.jpg"
                  alt="brand"
                  width={1089}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            transition={{ ease: [0.17, 0.67, 0.53, 0.37] }}
            animate={slide === 2 ? 'show' : 'hidden'}
            variants={pageAnimation.displayNoneAnim}
            className="slide"
          >
            <div className="slide__info">
              <div className="slide__brand">
                <StaticImage
                  src="../../../public/static/images/slider/one/brand-logo.png"
                  alt="brand"
                  width={100}
                />
              </div>
              <h2>evisu</h2>

              <p className="slide__text">
                кропотливая работа с трудоемкими методиками позволяют сохранить традиционное
                производство японского денима <br />с 1991 года
              </p>
             {/*<Btn  setSlideAnim={setSlideAnim} title='каталог' color='black'/>*/}
            </div>
            <div className="slide__img">
              <div className="slide__man slide__man_two">
                <StaticImage
                  src="../../../public/static/images/slider/two/man.png"
                  alt="brand"
                  width={494}
                />
              </div>
              <div className="slide__text__imgL slide__text__imgL_two">
                <span>evisu</span>
              </div>
              <div className="slide__text__imgR slide__text__imgR_two">
                <span>evisu</span>
              </div>
              <div className="slide__mash slide__mash_two">
                <StaticImage src="../../../public/static/images/slider/two/mash.png"  width={904}  alt="mash"/>
              </div>
            </div>
          </motion.div>

          <div
            className={cn("slide__pagination", {
              ["slide__pagination__border_one"]: slide === 1 && !slideAnim,
              ["slide__pagination__border_two"]: slide === 2 && !slideAnim,
            })}
          >
            <motion.div
              transition={{ ease: [0.4, 0.4, 0.4, 0.4] }}
              animate={!slideAnim ? 'show' : 'hidden'}
              variants={pageAnimation.opasityAnim}
              onClick={() => changeSlideCount('prev')}
              className="slide__pagination__prev"
            >
              <img src="/static/images/slider/slide-arr.png" alt="brand" />
            </motion.div>

            <div className="slide__pagination__count">
              <motion.div
                // transition={{ ease: [0.4, 0.4, 0.4, 0.4] }}
                animate={!slideAnim ? 'norm' : 'scale'}
                variants={pageAnimation.scaleAnim}
              >
                <span> 0 {slide} </span>/
                <span className="slide__count__opacity"> 0 {slideCount} </span>
              </motion.div>
            </div>

            <motion.div
              transition={{ ease: [0.17, 0.67, 0.53, 0.37] }}
              animate={!slideAnim ? 'show' : 'hidden'}
              variants={pageAnimation.opasityAnim}
              onClick={() => changeSlideCount('next')}
              className="slide__pagination__next"
            >
              <img src="/static/images/slider/slide-arr.png" alt="brand"/>
            </motion.div>
          </div>
          <div className="slide__icons">
            <Icons dir="row">
              <InstaIcon />
              <ShareIcon />
            </Icons>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSlider;

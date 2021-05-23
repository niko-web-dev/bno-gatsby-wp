import React, {FC} from 'react';
import './btn.mod.scss';
import {TBtnProps} from '../../types';
import { Link } from "gatsby"

const Btn: FC<TBtnProps> = ({setSlideAnim, color, link, title }) => {

    return (
        <button className="btn"
            style={{border: color === "black" ? "2px solid black" : "2px solid white"}}

            onMouseOver={() => {
                {setSlideAnim &&  setSlideAnim(true)}

            }}
            onMouseOut={() => {
                {setSlideAnim && setSlideAnim(false)}

            }}
            onClick={() => console.log('onclick')}
        >
            <Link to={link} style={{color: color === "black" ? "black" : "white"}}>
                {title}
            </Link>
        </button>
    )
}

export default Btn;

import React from 'react'
import "./footer.scss"
import Logo from "../logo/logo";
import Btn from "../btn/Btn";

const Footer = () => {
    return (
        <div className="footer">
            <Logo color="white"/>
            <p>order your future
                MoSCOW
                <span>2021</span>
            </p>
            <div className="footer__subscription">
                <h3>подпишись на обновления</h3>
                <input type="text" placeholder='e-mail'/>
                <Btn title='подписаться' color='black' link='subscription'/>
            </div>
        </div>
    );
};

export default Footer;

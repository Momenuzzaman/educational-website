import React from 'react';
import logo from '../../../image/nav.png';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div>
                <img src={logo} alt="" />
                <p>We support programs that create advancement for people</p>
                <button className="button-icon"><FacebookRoundedIcon /></button>
            </div>
        </div >
    );
};

export default Footer;
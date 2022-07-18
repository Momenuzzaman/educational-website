import React from 'react';
import logo from '../../../image/nav.png';
import FacebookIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div>
                <img src={logo} alt="" />
                <p>We support programs that create advancement for people</p>
                <div>
                    <button className="button-icon"><FacebookIcon /></button>
                    <button className="button-icon"><GitHubIcon /></button>
                    <button className="button-icon"><InstagramIcon /></button>
                </div>
            </div>
            <div>
                <h4>Useful links</h4>
                <Link to="/aboutUs">About Us</Link>
            </div>
        </div >
    );
};

export default Footer;
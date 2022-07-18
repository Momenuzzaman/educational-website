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
                <br />
                <Link to="/privacyPolicy">Privacy Policy</Link>
                <br />
                <Link to="/terms">Terms & Conditions</Link>
                <br />
                <Link to="/Student">Student spotlight</Link>
            </div>
            <div>
                <h4>Learning</h4>
                <Link to="/business">Business Strategy</Link>
                <br />
                <Link to="/become">Become A Teacher</Link>
                <br />
                <Link to="/project">Project Management</Link>
                <br />
                <Link to="/membership">Membership</Link>
            </div>
            <div>
                <h4>Contact Us</h4>
            </div>
        </div >
    );
};

export default Footer;
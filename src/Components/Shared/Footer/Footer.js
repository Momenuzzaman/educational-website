import React from 'react';
import logo from '../../../image/nav.png';
import FacebookIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Footer.css';
import { Link } from 'react-router-dom';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import DraftsIcon from '@mui/icons-material/Drafts';
import PlaceIcon from '@mui/icons-material/Place';
const Footer = () => {
    return (
        <div className="footer-color">
            <div className=" footer container">
                <div >
                    <img src={logo} width="50%" alt="" />
                    <p>We support programs that create advancement for people</p>
                    <div className="btn-icon">
                        <a href="https://www.facebook.com/md.eamon.5205/" className="button-icon"><FacebookIcon /></a>
                        <a href="https://github.com/mdemon420" className="button-icon"><GitHubIcon /></a>
                        <button className="button-icon"><InstagramIcon /></button>
                    </div>
                </div>
                <div >
                    <h4>Useful links</h4>
                    <Link className="footer-link" to="/aboutUs">About Us</Link>
                    <br />
                    <Link className="footer-link" to="/privacyPolicy">Privacy Policy</Link>
                    <br />
                    <Link className="footer-link" to="/terms">Terms & Conditions</Link>
                    <br />
                    <Link className="footer-link" to="/Student">Student spotlight</Link>
                </div>
                <div >
                    <h4>Learning</h4>
                    <Link className="footer-link" to="/business">Business Strategy</Link>
                    <br />
                    <Link className="footer-link" to="/become">Become A Teacher</Link>
                    <br />
                    <Link className="footer-link" to="/project">Project Management</Link>
                    <br />
                    <Link className="footer-link" to="/membership">Membership</Link>
                </div>
                <div >
                    <h4>Contact Us</h4>
                    <p><PermContactCalendarIcon className="button-icon" /> +880 1400 374808</p>
                    <p><DraftsIcon className="button-icon" /> mdmomenuzzamanemon@gmail.com</p>
                    <p><PlaceIcon className="button-icon" /> Dhaka,Bangladesh</p>
                </div>
            </div >
        </div>
    );
};

export default Footer;
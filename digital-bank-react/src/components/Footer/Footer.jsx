import {
    FaGithub,
    FaFacebook,
    FaInstagram
} from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

import Button from "../Button";

import logoLight from "../../assets/images/logo-light.svg";

import "./Footer.css";

const socialLinks = [
    {
        label: "GitHub",
        href: "https://github.com/ayra-baet",
        icon: <FaGithub />
    },

    {
        label: "Facebook",
        href: "https://www.facebook.com/",
        icon: <FaFacebook />
    },

    {
        label: "Instagram",
        href: "https://www.instagram.com/",
        icon: <FaInstagram />
    },

    {
        label: "YouTube",
        href: "https://www.youtube.com/",
        icon: <IoLogoYoutube />
    },

    {
        label: "XTwitter",
        href: "https://x.com/",
        icon: <FaXTwitter />
    }
];

function Footer() {
    return(
        <footer className="footer">
            <div className="container footer__container">
                <a href="#home" aria-label="Digitalbank Home">
                    <img className="footer__logo" src={logoLight} alt="Digitalbank logo" />
                </a>

                <nav className="footer__social-links" aria-label="Social media">
                    <ul>
                        {socialLinks.map(social => (
                            <li key={social.label}>
                                <a 
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                    <ul className="footer__nav-links footer__nav-links--left">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#features">About us</a></li>
                    </ul>

                    <ul className="footer__nav-links footer__nav-links--right">
                        <li><a href="#articles">Blog</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>

                <Button variant="footer" />
                <p className="footer__copyright">© Digitalbank. All Rights Reserved</p>
            </div>

            <p className="attribution">
                Challenge by {" "}
                <a 
                    href="https://www.frontendmentor.io?ref=challenge"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Frontend Mentor
                </a>. 
                Coded by {" "}
                <a 
                    href="https://github.com/ayra-baet"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Ayra Austine Baet
                </a>.
            </p>
        </footer>
    );
}

export default Footer;
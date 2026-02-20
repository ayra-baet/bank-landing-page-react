import { useState } from "react";

import Backdrop from "../Backdrop/Backdrop";
import MenuToggle from "./MenuToggle";
import MobileMenu from "../MobileMenu/MobileMenu";

import logoDark from "../../assets/images/logo-dark.svg";

import "./Header.css";

const links = ["Home", "About", "Contact", "Blog", "Careers"];

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
            <header className="header">
                <nav className="nav">
                    {/* logo */}
                    <a 
                        href="/"
                        aria-label="Homepage"
                    >
                        <img 
                            src={logoDark} 
                            alt="Company logo"
                            className="nav__logo" 
                            />
                    </a>

                    {/* Menu Toggle */}
                    <MenuToggle isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />

                    {/* navigation links */}
                    <ul
                        aria-label="navigation links"
                        className="nav__links"
                    >
                        {links.map(link => (
                            <li key={link}>
                                <a href="#">{link}</a>
                            </li>
                        ))}
                    </ul>

                    {/* call-to-action button */}
                    <button
                        className="nav__btn"
                    >
                        Request Invite
                    </button>
                </nav>
            </header>

            <MobileMenu links={links} isOpen={isOpen} />
            <Backdrop isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}

export default Header;
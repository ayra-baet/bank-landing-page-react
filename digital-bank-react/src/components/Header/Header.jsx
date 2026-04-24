import { useState, useEffect } from "react";

import Backdrop from "../Backdrop/Backdrop";
import MenuToggle from "./MenuToggle";
import MobileMenu from "../MobileMenu/MobileMenu";
import Button from "../Button/index";

import logoDark from "../../assets/images/logo-dark.svg";

import "./Header.css";

const links = ["Home", "About", "Contact", "Blog", "Careers"];

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if(isOpen) {
            document.documentElement.classList.add("scrolling-disabled");
            document.body.classList.add("scrolling-disabled");
        } else {
            document.documentElement.classList.remove("scrolling-disabled");
            document.body.classList.remove("scrolling-disabled");
        }

        return() => {
            document.documentElement.classList.remove("scrolling-disabled");
            document.body.classList.remove("scrolling-disabled");
        }
    }, [isOpen])

    return(
        <>
            <header className="header">
                <nav className="container flex-between">
                    {/* logo */}
                    <a 
                        href="/"
                        aria-label="Homepage"
                    >
                        <img 
                            src={logoDark} 
                            alt="Digitalbank logo"
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
                                <a href="/">{link}</a>
                            </li>
                        ))}
                    </ul>

                    {/* call-to-action button */}
                    <Button variant="header"/>
                </nav>
            </header>

            <MobileMenu links={links} isOpen={isOpen} />
            <Backdrop isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}

export default Header;
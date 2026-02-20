import "./MobileMenu.css";

function MobileMenu({ links, isOpen }) {
    return(
        <div className={`menu ${isOpen ? "menu--open": ""}`}>
            <ul>
                {links.map((link) => (
                    <li key={link}>
                        <a href="#">{link}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MobileMenu;
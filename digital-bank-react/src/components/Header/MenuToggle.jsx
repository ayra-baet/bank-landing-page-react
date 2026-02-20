import "./MenuToggle.css";

function MenuToggle({ isOpen, toggle }) {
    return(
        <button 
            className={`toggle ${isOpen ? "toggle--open": ""}`}
            aria-label="menu toggle"
            aria-expanded={isOpen}
            onClick={toggle}
        >
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
}

export default MenuToggle;
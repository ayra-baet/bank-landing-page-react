import "./Backdrop.css";

function Backdrop({ isOpen, onClose }) {
    return(
        <div 
            className={`backdrop ${isOpen ? "backdrop--open" : ""}`}
            onClick={onClose}
        />
    );
}

export default Backdrop;
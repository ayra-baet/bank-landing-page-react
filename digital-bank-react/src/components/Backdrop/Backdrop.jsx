import "./Backdrop.css";

function Backdrop({ isOpen, onClose }) {
    return(
        <div 
            className={`backdrop ${isOpen ? "backdrop--open" : "backdrop--closing"}`}
            onClick={onClose}
        />
    );
}

export default Backdrop;
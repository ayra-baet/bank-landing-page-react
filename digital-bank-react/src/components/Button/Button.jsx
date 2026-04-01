import "./Button.css";

function Button({ variant }) {
    return(
        <button className={`button button--${variant}`}>
            Request Invite
        </button>
    );
}

export default Button;
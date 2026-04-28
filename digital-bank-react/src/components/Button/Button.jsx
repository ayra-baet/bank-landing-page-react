import "./Button.css";

function Button({ variant }) {
    return(
        <a
            href="https://github.com/ayra-baet"
            target="_blank"
            rel="noopener noreferrer"
            className={`button button--${variant}`}
        >
            Request Invite
        </a>
    );
}

export default Button;
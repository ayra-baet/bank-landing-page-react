import "./Section.css";

function Section({ backgroundColor, title, description, children }) {
    return(
        <section 
            className={backgroundColor}
            aria-labelledby={`${title}-heading`}
        >
            <div className="container section__container">
                <div className="section__header">
                    <h2 id={`${title}-heading`}>{title}</h2>
                    {description && <p>{description}</p>}
                </div>

                <div className="section__grid">
                    {children}
                </div>
            </div>
        </section>
    );
}

export default Section;
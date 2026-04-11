import "./Section.css";

function Section({ backgroundColor, title, description, children }) {
    return(
        <section className={backgroundColor}>
            <div className="container section__container">
                <div className="section__header">
                    <h2>{title}</h2>
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
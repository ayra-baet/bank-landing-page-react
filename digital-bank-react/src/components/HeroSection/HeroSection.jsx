import Button from "../Button/index";

import mockup from "../../assets/images/image-mockups.png";

import "./HeroSection.css";

function HeroSection() {
    return(
        <section 
            className="hero" 
            aria-labelledby="hero__title"
        >
            <div className="container hero__container">

                <div className="hero__visual">
                    <div className="hero__bg-wrapper">
                        <div className="hero__bg"></div>
                    </div>
                    <img 
                        src={mockup}
                        alt="Mockup of a banking app on mobile phones"
                        className="hero__mockup" 
                    />
                </div>

                <div className="hero__content">
                    <h1 id="hero__title">Next generation digital banking</h1>
                    <p>
                      Take your financial life online. Your Digitalbank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.  
                    </p>
                    <Button variant="hero" />
                </div>

            </div>
        </section>
    );
}

export default HeroSection;
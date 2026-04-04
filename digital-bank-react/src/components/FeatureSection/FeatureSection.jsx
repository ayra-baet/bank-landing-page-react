import onlineIcon from "../../assets/images/icon-online.svg";
import budgetingIcon from "../../assets/images/icon-budgeting.svg";
import onboardingIcon from "../../assets/images/icon-onboarding.svg";
import apiIcon from "../../assets/images/icon-api.svg";

import "./FeatureSection.css";

const features = [
    {
        id: 1,
        icon: onlineIcon,
        title: "Online Banking",
        text: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
    },

    {
        id: 2,
        icon: budgetingIcon,
        title: "Simple Budgeting",
        text: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
    },

    {
        id: 3,
        icon: onboardingIcon,
        title: "Fast Onboarding",
        text: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away." 
    },

    {
        id: 4,
        icon: apiIcon,
        title: "Open API",
        text: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
    }
]

function FeatureSection() {
    return(
        <section className="feature">
            <div className="container feature__container">
                <div className="feature__header">
                    <h2>Why choose Digitalbank?</h2>
                    <p>
                        We leverage Open Banking to turn your bank account into your financial hub. Control 
        your finances like never before.
                    </p>
                </div>
                    
                <div className="feature__list">
                    {features.map((feature) => (
                        <div className="feature__item" key={feature.id}>
                            <img className="feature__item-icon" src={feature.icon} alt="" />
                            <h3>{feature.title}</h3>
                            <p>{feature.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeatureSection;
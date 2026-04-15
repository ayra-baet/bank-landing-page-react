import iconOnline from "../../assets/images/icon-online.svg";
import iconBudgeting from "../../assets/images/icon-budgeting.svg";
import iconOnboarding from "../../assets/images/icon-onboarding.svg";
import iconApi from "../../assets/images/icon-api.svg";

import "./Features.css";

const features = [
    {
        id: 1,
        icon: iconOnline,
        title: "Online Banking",
        description: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
    },
    {
        id: 2,
        icon: iconBudgeting,
        title: "Simple Budgeting",
        description: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
    },
    {
        id: 3,
        icon: iconOnboarding,
        title: "Fast Onboarding",
        description: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
    },
    {
        id: 4,
        icon: iconApi,
        title: "Open API",
        description: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
    }
]

function Features() {
    return(
        <>
            {features.map(feature => (
                <div className="feature__item" key={feature.id}>
                    <img src={feature.icon} alt="" />
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                </div>
            ))}
        </>
    );
}

export default Features;
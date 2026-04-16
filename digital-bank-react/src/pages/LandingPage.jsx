import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import Section from "../components/Section/Section";
import Features from "../components/Features/Features";
import Articles from "../components/Articles/Articles";

function LandingPage() {
    return(
        <>
            <Header />
            <HeroSection />

            <Section
                backgroundColor="section--gray-100"
                title="Why choose Digitalbank?"
                description="We leverage Open Banking to turn your bank account into your financial hub. Control 
          your finances like never before."
            >
                <Features />
            </Section>

            <Section
                backgroundColor="section--gray-50"
                title="Latest Articles"
            >
                <Articles />
            </Section>
        </>
    );
}

export default LandingPage;
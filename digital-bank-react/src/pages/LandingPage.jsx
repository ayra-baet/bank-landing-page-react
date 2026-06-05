import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import Section from "../components/Section/Section";
import Features from "../components/Features/Features";
import Articles from "../components/Articles/Articles";
import Footer from "../components/Footer/Footer";

function LandingPage() {
    return(
        <>
            <header id="home">
                <Header />
            </header>

            <main>
                <HeroSection />

                <section id="features">
                    <Section
                        backgroundColor="section--gray-100"
                        title="Why choose Digitalbank?"
                        description="We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before."
                >
                        <Features />
                    </Section>
                </section>

                <section id="articles">
                    <Section
                        backgroundColor="section--gray-50"
                        title="Latest Articles"
                    >
                        <Articles />
                    </Section>
                </section>
            </main>

            <footer id="footer">
                <Footer />
            </footer>
            
        </>
    );
}

export default LandingPage;
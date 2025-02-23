
import Nav from "../components/section/nav";
import Hero from "../components/section/hero";
import HowItWorks from "../components/section/HowItWorks";
import Features from "../components/section/features";

function HomePage() {    
    return (
        <section className="w-full h-screen gap-4">
            <Nav />
            <Hero />
            <HowItWorks />\
            <Features />

            
        </section>
    )
}

export default HomePage;


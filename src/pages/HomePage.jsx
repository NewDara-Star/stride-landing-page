
import Nav from "../components/section/nav";
import Hero from "../components/section/hero";
import HowItWorks from "../components/section/HowItWorks";
import Features from "../components/section/features";
import JoinWaitlist from "../components/section/JoinWaitlist"; 

function HomePage() {    
    return (
        <section className="w-screen h-screen gap-4">
            <Nav />
            <Hero />
            <HowItWorks />\
            <Features />
            <JoinWaitlist /> 

            
        </section>
    )
}

export default HomePage;


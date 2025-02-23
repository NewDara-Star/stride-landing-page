
import Nav from "../components/section/nav";
import Hero from "../components/section/hero";
import HowItWorks from "../components/section/HowItWorks";
import Features from "../components/section/features";
import JoinWaitlist from "../components/section/JoinWaitlist"; 
import Footer from "../components/section/footer";

function HomePage() {    
    return (
        <section className="w-screen h-screen gap-4">
            <Nav />
            <Hero />
            <HowItWorks />\
            <Features />
            <JoinWaitlist /> 
<Footer />
            
        </section>
    )
}

export default HomePage;


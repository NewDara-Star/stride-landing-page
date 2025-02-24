
import Nav from "../components/section/nav";
import Hero from "../components/section/hero";
import HowItWorks from "../components/section/HowItWorks";
import Features from "../components/section/Features";
import JoinWaitlist from "../components/section/JoinWaitlist"; 
import Footer from "../components/section/footer";

function HomePage() {    
    return (
        <section className="w-full min-h-screen flex flex-col gap-4 mx-4 align-center justify-center items-self-center">
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


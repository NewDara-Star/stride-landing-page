
import Nav from "../components/section/nav";
import Hero from "../components/section/hero";
import HowItWorks from "../components/section/HowItWorks";
import Features from "../components/section/Features";
import VideoSection from "../components/section/VideoSection";
import JoinWaitlist from "../components/section/JoinWaitlist"; 
import FAQ from "../components/section/FAQ";

function HomePage() {    
    return (
        <section className="w-full min-h-screen flex flex-col content-center align-center justify-center items-self-center my-2">
            <Nav />
            <Hero />
           
            <HowItWorks />
            <Features />
            <VideoSection />
            <JoinWaitlist /> 
            <FAQ />
            
        </section>
    )
}

export default HomePage;



import Nav from "../components/section/nav";
import JoinWaitlistSection from "../components/section/JoinWaitlistSection";
import FAQ from "../components/section/FAQ";

function JoinWaitlistPage() {    
    return (
        <section className="w-full min-h-screen flex flex-col content-center align-center justify-center items-self-center">
            <Nav />
        <JoinWaitlistSection/>
            <FAQ />
            
        </section>
    )
}

export default JoinWaitlistPage;

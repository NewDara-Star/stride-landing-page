
import Nav from "../components/section/nav";
import PriceSection from "../components/section/PriceSection";
import FAQ from "../components/section/FAQ";

function PricingPage() {    
    return (
        <section className="w-full min-h-screen flex flex-col gap-4 content-center align-center justify-center items-self-center">
            <Nav />
            <PriceSection />
            <FAQ />
            
        </section>
    )
}

export default PricingPage;


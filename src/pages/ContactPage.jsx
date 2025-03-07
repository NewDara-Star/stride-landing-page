
import Nav from "../components/section/nav";
import ContactUs from "../components/section/ContactUs";
import FAQ from "../components/section/FAQ";

function ContactPage() {    
    return (
        <section className="w-full min-h-screen flex flex-col content-center align-center justify-center items-self-center">
            <Nav />
        <ContactUs/>
            <FAQ />
            
        </section>
    )
}

export default ContactPage;


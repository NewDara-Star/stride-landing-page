
import Nav from "../components/section/nav";

import FAQ from "../components/section/FAQ";
import BlogSection from "../components/section/BlogSection";

function ContactPage() {    
    return (
        <section className="w-full min-h-screen flex flex-col content-center align-center justify-center items-self-center">
            <Nav />
        <BlogSection/>
            <FAQ />
            
        </section>
    )
}

export default ContactPage;


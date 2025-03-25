
import Nav from "../components/section/nav";

import FAQ from "../components/section/FAQ";
import Error from "../components/section/Error";

function ErrorPage() {    
    return (
        <section className="w-full min-h-screen flex flex-col content-center align-center justify-center items-self-center">
            <Nav />
            <Error />       
            <FAQ />
            
        </section>
    )
}

export default ErrorPage;


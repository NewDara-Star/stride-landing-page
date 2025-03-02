import Button from "../ui/Button";
import { Link } from "react-router-dom";


function Hero() {
    return (
        <section className="flex flex-col items-center justify-center gap-6 p-8 h-auto mx-auto animate-slideIn">
            <h1 className="text-4xl font-bold mb-4">Plan Your Workouts. Track Your Progress. <br /> <span className="text-indigo-600 font-bold">Share Your Success. </span></h1>
            <p className="text-lg mb-8">Your ultimate fitness tracking tool is coming soon!</p>

            <span className="flex space-x-4">
            <Link to="/join-waitlist"><Button variant="primary">Join Waitlist</Button></Link>
            <Link to="#"><Button variant="secondary">Learn More</Button></Link>
            </span>
          

            <img 
                src="/images/d93f9c65397547.5af2fc5f3a71e.gif" 
                alt="Animated preview" 
                className="aspect-[4/3] md:aspect-[16/9] mt-8 w-full max-w-4xl rounded-xl animate-slideIn"
                />
        </section>
    )
}

export default Hero
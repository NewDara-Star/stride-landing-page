import Button from "../ui/Button";
import { Link } from "react-router-dom";


function Hero() {
    return (
        <section className="flex flex-col items-center justify-center gap-6 p-8 h-auto mx-auto animate-slideIn 
            bg-gradient-to-br from-white via-indigo-50/50 to-white
            dark:from-gray-900 dark:via-indigo-950/30 dark:to-gray-900
            transition-colors duration-300 pt-28">
            <h1 className="text-4xl font-bold mb-4">Plan Your Workouts. Track Your Progress. <br /> <span className="text-indigo-600 font-bold">Share Your Success. </span></h1>
            <p className="text-lg mb-8">Your ultimate fitness tracking tool is coming soon!</p>

            <span className="flex space-x-4">
            <Link to="/join-waitlist"><Button variant="primary">Join Waitlist</Button></Link>
            <Link to="#"><Button variant="secondary">Learn More</Button></Link>
            </span>
          
            <div className="relative w-full max-w-4xl mt-8">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-gray-900 z-10"></div>
                <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-indigo-500/20 dark:bg-indigo-500/10 blur-3xl rounded-full z-0"></div>
                <img 
                    src="public/images/edgar-chaparro-sHfo3WOgGTU-unsplash.jpg" 
                    alt="Animated preview" 
                    className="relative w-full h-auto object-cover rounded-xl animate-slideIn z-[1] shadow-2xl"
                />
            </div>
        </section>
    )
}

export default Hero
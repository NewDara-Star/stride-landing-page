import Button from "../ui/Button";
import { Link } from "react-router-dom";


function Hero() {
    return (
        <section className="flex flex-col items-center justify-center gap-6 p-8 mx-auto animate-slideIn 
            bg-gradient-to-br from-white via-indigo-50/50 to-white
            dark:from-gray-900 dark:via-indigo-950/30 dark:to-gray-900
            transition-colors duration-300 pt-28 w-full h-dvh">
            <h1 className="text-4xl font-bold mb-4">Plan Your Workouts. Track Your Progress. <br /> <span className="text-indigo-600 font-bold">Share Your Success. </span></h1>
            <p className="text-lg mb-8">Your ultimate fitness tracking tool is coming soon!</p>

            <span className="flex space-x-4">
            <Link to="/join-waitlist"><Button variant="primary">Join Waitlist</Button></Link>
            <Link to="#"><Button variant="secondary">Learn More</Button></Link>
            </span>

            <img 
                        src="public/images/edgar-chaparro-sHfo3WOgGTU-unsplash.jpg" 
                        alt="Animated preview" 
                        className=" aspect-[16/9] w-full overflow-hidden rounded-xl max-w-4xl mt-8
                        h-full object-cover object-top animate-slideIn z-[1] shadow-2xl"
            />
          
            
    
        </section>
    )
}

export default Hero
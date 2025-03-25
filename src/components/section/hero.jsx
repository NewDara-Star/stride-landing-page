import Button from "../ui/Button";
import { Link } from "react-router-dom";


function Hero() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center gap-6 p-16 mx-auto animate-slideIn 
            bg-gradient-to-br from-white via-indigo-50/50 to-white
            dark:from-gray-900 dark:via-indigo-950/30 dark:to-gray-900
            transition-colors duration-300 pt-28 w-full h-auto">

            <div className="flex flex-col items-center md:items-start justify-center md:justify-start w-full md:w-1/2 ">
            <h1 className="text-4xl md:text-7xl font-bold mb-4 md:text-left">Plan Your Workouts. Track Your Progress. <br /> <span className="text-indigo-600 font-bold">Share Your Success. </span></h1>
            <p className="text-lg md:text-2xl mb-8 md:text-left">Your ultimate fitness tracking tool is coming soon!</p>

            <span className="flex space-x-4">
            <Link to="/join-waitlist"><Button variant="primary">Join Waitlist</Button></Link>
            <Link to="#"><Button variant="secondary">Learn More</Button></Link>
            </span>
            </div>

            <img 
                        src="/images/Gemini_Generated_Image_gsai5xgsai5xgsai.jpg" 
                        alt="Animated preview" 
                        className="  w-full md:w-1/2 overflow-hidden rounded-xl max-w-4xl mt-8
                        h-full object-cover object-top animate-slideIn z-[1] shadow-2xl"
            />
          
            
    
        </section>
    )
}

export default Hero
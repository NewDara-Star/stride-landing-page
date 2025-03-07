import SectionTitle from "../ui/SectionTitle";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

function JoinWaitlistSection() {
    return (
        <section className="w-full bg-gradient-to-b from-white via-indigo-50/30 to-white
            dark:from-gray-900 dark:via-indigo-900/20 dark:to-gray-900
            transition-colors duration-300">
            <div className="flex flex-col-reverse items-center p-8 pt-28 justify-around gap-16 md:flex-row max-w-7xl mx-auto">
                <div className="flex flex-col md:justify-start min-w-28 w-full md:w-1/2 md:text-left md:items-start text-start">
                    <SectionTitle className="md:text-left"
                        title="Join the waitlist" 
                        text="Experience the power of a truly integrated fitness tool with Stride. Elevate your workouts and achieve your goals with features that work as hard as you do. Be among the first to try Stride's advanced progress tracking and social sharing features. Your fitness journey starts here!"
                    /> 

                    <div className="flex w-full gap-4 px-8 mt-6">
                        <input 
                            type="text" 
                            placeholder="Enter your email" 
                            className="px-4 py-2 w-full border border-white/10 dark:border-gray-700/30 
                                rounded-md dark:bg-gray-900/50 bg-white/50 backdrop-blur-sm
                                focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                                transition-all duration-300"
                        />
                        <Link to="/join-waitlist" className="w-1/4">
                            <Button variant="primary">Join</Button>
                        </Link>
                    </div>
                </div>

                <img 
                    src="/images/Home.jpg" 
                    alt="" 
                    className="w-1/2 md:w-1/4 animate-fadeIn hover:scale-105 transition-transform duration-300 
                        drop-shadow-2xl"
                />
            </div>
            
            {/* Gradient fade out at bottom */}
            <div className="h-24 bg-gradient-to-t from-white via-white/80 to-transparent
                dark:from-gray-900 dark:via-gray-900/80 dark:to-transparent">
            </div>
        </section>
    )
};

export default JoinWaitlistSection;
